import React, { useState } from "react";
const Task = ({ task, onDelete, onToggle, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onEdit(task.id, editedText);
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                    />
                    <button onClick={handleSave}>Сохранить</button>
                </div>
            ) : (
                <div>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggle(task.id)}
                    />
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.text}
                    </span>
                    <button onClick={handleEdit}>Редактировать</button>
                    <button onClick={() => onDelete(task.id)}>Удалить</button>
                </div>
            )}
        </div>
    );
};
export default Task;