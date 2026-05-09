function Pagination({
    currentPage,
    totalPages,
    setCurrentPage
}) {

    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (

        <div className="pagination">

            {
                pages.map((page) => (

                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={
                            currentPage === page
                                ? "page-btn active"
                                : "page-btn"
                        }
                    >
                        {page}
                    </button>

                ))
            }

        </div>
    );
}

export default Pagination;