function sortBooks(order) {
            let bookList = document.getElementById('bookList');
            let books = Array.from(bookList.getElementsByTagName('li'));

            if (order === 'asc') {
                books.sort((a, b) => a.innerText.localeCompare(b.innerText));
            } else if (order === 'desc') {
                books.sort((a, b) => b.innerText.localeCompare(a.innerText));
            }

            // Clear the current list
            while (bookList.firstChild) {
                bookList.removeChild(bookList.firstChild);
            }

            // Append the sorted books back to the list
            for (let book of books) {
                bookList.appendChild(book);
            }
        }