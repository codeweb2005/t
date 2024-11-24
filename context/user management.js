    // Mảng lưu trữ người dùng
        let users = [];

        // Lưu người dùng
        document.getElementById('userForm').addEventListener('submit', function (e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const status = document.getElementById('status').value;

            // Kiểm tra người dùng có tồn tại hay không
            const existingUserIndex = users.findIndex(user => user.email === email);

            if (existingUserIndex !== -1) {
                // Sửa thông tin người dùng
                users[existingUserIndex] = { username, email, password, status };
            } else {
                // Thêm người dùng mới
                users.push({ username, email, password, status });
            }

            // Cập nhật danh sách người dùng
            updateUserList();

            // Reset form
            this.reset();
        });

        // Cập nhật danh sách người dùng
        function updateUserList() {
            const userList = document.getElementById('userList');
            userList.innerHTML = '';

            users.forEach((user, index) => {
                const row = `
                    <tr>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                        <td>${user.status === 'active' ? 'Active' : 'Locked'}</td>
                        <td>
                            <button onclick="editUser(${index})">Edit</button>
                            <button onclick="deleteUser(${index})">Remove</button>
                        </td>
                    </tr>
                `;
                userList.innerHTML += row;
            });
        }

        // Sửa người dùng
        function editUser(index) {
            const user = users[index];

            document.getElementById('username').value = user.username;
            document.getElementById('email').value = user.email;
            document.getElementById('password').value = user.password;
            document.getElementById('status').value = user.status;
        }

        // Xoá người dùng
        function deleteUser(index) {
            users.splice(index, 1);
            updateUserList();
        }
