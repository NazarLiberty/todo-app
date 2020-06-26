import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-pannel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddButton from '../add-button';


export default class App extends Component {
    constructor() {
        super()
        this.state = {
            todoData: [
                { label: 'Learn React', done: false, important: false, id: 1 },
                { label: 'Make Awesome App', done: false, important: true, id: 2 },
                { label: 'Drink beer', done: false, important: true, id: 3 },
            ],
            count: 4,
            search: "",
            filter: "All"
        }
        this.deleteItem = (id) => {
            this.setState(({ todoData }) => {
                return { todoData: todoData.filter(e => e.id !== id) }
            })
        }
        this.AddItem = (text) => {
            console.log(this.state.count)
            this.setState(({ count }) => {
                let itemId = count;
                return { count: ++itemId }
            })
            this.setState(({ todoData }) => {
                const newList = todoData.map(e => e)
                newList.push({ label: text, important: false, id: this.state.count })
                return { todoData: newList }
            })
        }
        this.onToggleDone = (id) => {
            this.setState(({ todoData }) => {
                return {
                    todoData: todoData.map((e => {
                        if (e.id === id) {
                            let newItem = { ...e, done: !e.done }
                            e = newItem
                        }
                        return e
                    }))
                }
            })
        }
        this.onToggleImportant = (id) => {
            this.setState(({ todoData }) => {
                return {
                    todoData: todoData.map((e) => {
                        if (e.id === id) {
                            let newItem = { ...e, important: !e.important }
                            e = newItem
                        }
                        return e
                    })
                }
            })
        }
        this.onSearch = (text) => {
            this.setState({ search: text })
        }
        this.searchFilter = (data, search) => {
            return data.filter(el => el.label.toLowerCase().includes(search.toLowerCase()))
        }
        this.onFilter = (type) => {
            this.setState({ filter: type })
        }
        this.statusFilter = () => {
            let visibleItems = this.searchFilter(this.state.todoData, this.state.search)
            if (this.props.filter === "All") return visibleItems
            else if (this.state.filter === "Active") visibleItems = visibleItems.filter(el => !el.done)
            else if (this.state.filter === "Done") visibleItems = visibleItems.filter(el => el.done)
            return visibleItems
        }

    }
    render() {
        const { todoData, filter } = this.state
        const doneCount = todoData
            .filter(e => e.done).length
        const todoCount = todoData.length - doneCount
        const visibleItems = this.statusFilter()
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearch={this.onSearch}
                    />
                    <ItemStatusFilter onFilter={this.onFilter}
                        filterStatus={filter} />
                </div>

                <TodoList todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />
                <AddButton onAdded={this.AddItem} />
            </div>
        );
    }
}