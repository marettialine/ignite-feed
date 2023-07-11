import { PencilLine } from 'phosphor-react'

import { Avatar } from './Avatar.tsx';

import styles from "../assets/css/Sidebar.module.css"

export function Sidebar(){
    return (
        <aside className = { styles.sidebar }>
            <img
                className = { styles.cover }
                src = "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
            />
        
            <div className = { styles.profile }>
                <Avatar hasBorder src = "https://github.com/marettialine.png" alt = ""/>
                
                <strong>Aline Maretti</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href = "#">
                    <PencilLine size = { 20 }/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}