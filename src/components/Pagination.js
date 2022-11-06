
const Pagination = () => {
    return (
        <nav aria-label="...">
                            <ul class="pagination justify-content-center">
                                <li class="page-item disabled">
                                    <a class="page-link">Önceki Sayfa</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active" aria-current="page">
                                    <a class="page-link" href="#">2</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">Sonraki Sayfa</a>
                                </li>
                            </ul>
                        </nav>

    )
}

export default Pagination;