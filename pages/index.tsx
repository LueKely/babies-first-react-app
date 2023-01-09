import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import JoeOfMama from '../components/JoeOfMama';
import Nigga from '../components/JoeOfPapa';
const inter = Inter({ subsets: ['latin'] });

const lue = fetch('/api/hello').then((Response) =>
	Response.json().then((lol) => {
		return lol.name;
	})
);

export default function Home() {
	return (
		<>
			<JoeOfMama></JoeOfMama>
			<Nigga></Nigga>
		</>
	);
}
