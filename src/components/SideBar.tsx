import { useEffect, useState } from "react";
import { Genre } from "../interfaces";
import { api } from "../services/api";
import { Button } from "./Button";
import "../styles/sidebar.scss";

type SideBarProps = {
    onSelectedGenreChanged: (genre: Genre) => void;
    selectedGenre: Genre;
    genres: Genre[];
};
export function SideBar({
    onSelectedGenreChanged,
    selectedGenre,
    genres,
}: SideBarProps) {
    return (
        <nav className="sidebar">
            <span>
                Watch<p>Me</p>
            </span>

            <div className="buttons-container">
                {genres.map((genre) => (
                    <Button
                        key={String(genre.id)}
                        title={genre.title}
                        iconName={genre.name}
                        onClick={() => onSelectedGenreChanged(genre)}
                        selected={selectedGenre.id === genre.id}
                    />
                ))}
            </div>
        </nav>
    );
}
