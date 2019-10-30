/**
 * Action Creator
 * These are functions that help manage the actions
 * @type {number}
 */

import {ADD_TODO, TOGGLE_TODO} from "./Types/actionTypes";

let nextId = 0;
export const addTodo = (text) => ({
   type: ADD_TODO,
   id: nextId++,
    text: text
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
});

