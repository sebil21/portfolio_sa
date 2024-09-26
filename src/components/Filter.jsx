import '../styles/_filter.scss';
import { useState } from 'react';

export default function Filter({ setCategory }) {
    const [isOpen, setIsOpen] = useState(false);

    const categories = ['All', 'React', 'HTML', 'Gestion projet'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="filter">
            <button className="filter__button" onClick={toggleDropdown}>
                Filtrer
            </button>
            <ul className={`filter__list ${isOpen ? 'open' : ''}`}>
                {categories.map((category) => (
                    <li key={category}>
                        <button
                            className="filter__category"
                            onClick={() => {
                                setCategory(category);
                                setIsOpen(false);
                            }}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
