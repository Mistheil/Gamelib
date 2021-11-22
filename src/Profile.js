import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from "react";
import CardProf from "./CardProf";
import "./Profile.css";

export default function Profile() {
    const dataDev = [
        {
            id: 1,
            img: "https://media.discordapp.net/attachments/781782917764349972/911662562775556136/Feeling_gray.png?width=678&height=678",
            nama: "Alle Raditya Otodinata",
            nim: "21120119130057",
            github: "mistheil",
            insta: "alle.raditya",
            steam: "mistheil"
        }
    ];

    return (
        <>
            <h1 id="headerProf">Behind the App:</h1>
            {dataDev.map((item, index) =>(
                <Fragment key={item.id}>
                    <CardProf
                        img={item.img}
                        nama={item.nama}
                        nim={item.nim}
                        github={item.github}
                        insta={item.insta}
                        steam={item.steam}
                    />
                    {dataDev.length === index + 1 && <div style={{ marginBottom: 80 }} /> }
                </Fragment>
            ))}
            <div className="containerProfDetail">
                <p id="profDetail">Aplikasi ini dibuat untuk Tugas Akhir</p>
                <p id="profDetail">Praktikum Mobile Device Programming 2021</p>
                <p id="profDetail">Jurusan Teknik Komputer</p>
                <p id="profDetail">Fakultas Teknik</p>
                <p id="profDetail">Universitas Diponegoro</p>
            </div>
            
        </>
    );
}