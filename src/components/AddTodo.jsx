import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(text))
        setText("");
      };
    return (
            <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg shadow-md max-w-sm mx-auto">
      <Input 
        type="text" 
        placeholder="Enter something..." 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <Button type="submit">Submit</Button>
    </form>
    );
};

export default AddTodo;