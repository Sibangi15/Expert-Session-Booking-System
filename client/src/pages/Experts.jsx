import { useEffect, useState } from "react";
import api from "../api/axios";
import ExpertCard from "../components/ExpertCard";
import Pagination from "../components/Pagination";

function Experts() {

    const [experts, setExperts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchExperts = async () => {
        try {
            setLoading(true);
            const { data } = await api.get(
                `/experts?page=${currentPage}&search=${search}&category=${category}`
            );
            setExperts(data.experts);
            setTotalPages(data.totalPages);
        } catch (error) {
            setError(error.response?.data?.message || "Error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchExperts();
    }, [currentPage, search, category]);

    if (loading) {
        return <h1 className="p-10">Loading...</h1>;
    }

    if (error) {
        return <h1 className="p-10">{error}</h1>;
    }

    return (

        <div className="experts-page">

            <div className="page-header">
                <div>
                    <h1>Find Your Expert</h1>
                    <p>
                        Book live sessions with industry professionals
                    </p>
                </div>
            </div>

            <div className="filters-container">

                <input
                    type="text"
                    placeholder="Search experts..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="category-select"
                >
                    <option value="">
                        All Categories
                    </option>

                    <option value="Web Development">
                        Web Development
                    </option>

                    <option value="UI/UX">
                        UI/UX
                    </option>

                </select>

            </div>

            <div className="experts-grid">
                {
                    experts.map((expert) => (
                        <ExpertCard
                            key={expert._id}
                            expert={expert}
                        />
                    ))
                }
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />

        </div>
    );
}

export default Experts;