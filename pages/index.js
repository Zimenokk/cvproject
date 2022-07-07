import Head from 'next/head'
import Image from 'next/image'
import styles from '../app/assets/styles/Home.module.css'
import Home from "../app/components/screens/home/Home";

export default function HomePage() {
    return (
        <div>
            <Home/>
        </div>
    )
}
