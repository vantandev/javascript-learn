# JavaScript {};


 







<!--
push()
- thêm các mục mới vào cuối một mảng. 
- thay đổi độ dài của mảng, trả về độ dài mới.

pop()
- loại bỏ (bật) phần tử cuối cùng của một mảng.
- thay đổi mảng ban đầu, trả về phần tử bị loại bỏ.

shift()
- loại bỏ mục đầu tiên của một mảng.
- thay đổi mảng ban đầu, trả về phần tử đã thay đổi.



slice()
- trả về các phần tử đã chọn trong một mảng, dưới dạng một mảng mới.
- chọn từ một điểm bắt đầu nhất định, cho đến một điểm kết thúc nhất định (không bao gồm: bỏ qua phần tử cuối) .
- không thay đổi mảng ban đầu.
### details
array.slice(a)
array.slice(a, b)
a là Vị trí bắt đầu. Mặc định là 0. Số âm chọn từ cuối mảng.
b Không bắt buộc. Vị trí kết thúc. Mặc định là phần tử cuối cùng. Số âm chọn từ cuối mảng.


splice()
- thêm vào / hoặc loại bỏ các phần tử mảng.
- ghi đè lên mảng ban đầu, trả về một mảng chứa tất cả những phần tử đã bị xóa

### details
splice(a)
splice(a, b)
splice(a, b, c, ....,d)
a là vị trí chỉ mục bắt đầu thay thế.
b là số phần tử sẽ bị lại bỏ, tính tử vị trí chỉ mục a
c, ....,d các phần tử sẽ được thêm vào từ vị trí. 



unshift()
- thêm các phần tử mới vào đầu mảng. 
- ghi đè lên mảng ban đầu.

keys()
- trả về một đối tượng Array Iterator với các khóa của một mảng (0, 1, 2, 3, ....).
- không thay đổi mảng ban đầu



toString()
- trả về một chuỗi với các giá trị mảng được phân tách bằng dấu phẩy.
- không thay đổi mảng ban đầu.

valueOf()
- thức trả về chính mảng.
- không thay đổi mảng ban đầu.

includes()
- trả về true nếu một mảng chứa một giá trị được chỉ định.
- trả về false nếu giá trị không được tìm thấy.
- có phân biệt chữ hoa chữ thường.


sort()
xếp các phần tử của một mảng.
ghi đè lên mảng ban đầu.
xếp các phần tử dưới dạng chuỗi theo thứ tự bảng chữ cái và tăng dần.



split()
- chia một chuỗi thành một mảng các chuỗi con.
- trả về mảng mới.
- không thay đổi chuỗi ban đầu.
### details
string.split(): trả về mảng ban đầu
string.split(a)
string.split(a, b)
a là Một chuỗi hoặc biểu thức chính quy (dk) để sử dụng để tách.
b là Một số nguyên giới hạn số lần tách, các mặt hàng sau khi giới hạn sẽ bị loại trừ.


join()
- trả về một mảng dưới dạng một chuỗi.
- không thay đổi mảng ban đầu.
- Bất kỳ dấu phân cách nào cũng có thể được chỉ định. 
- Giá trị mặc định là dấu phẩy (,).
### details
join(' ')
Dấu phân tách sẽ được sử dụng, Mặc định là dấu phẩy.




map () 
tạo một mảng mới từ việc gọi một hàm cho mọi phần tử của mảng.
không thực thi hàm cho các phần tử trống.
không thay đổi mảng ban đầu.
### details
array.map(function(currentValue, index, arr), thisValue)
function()là Một hàm được chạy cho mỗi phần tử mảng.
currentValue là Giá trị của phần tử hiện tại.
index là Chỉ mục của phần tử hiện tại
arr là Mảng của phần tử hiện tại.
thisValue là Một giá trị được truyền cho hàm sẽ được sử dụng làm giá trị this của nó.


filter () 
tạo một mảng mới chứa đầy các phần tử vượt qua bài kiểm tra do một hàm cung cấp.
không thực thi hàm cho các phần tử trống.
không thay đổi mảng ban đầu ..
### details
array.filter(function(currentValue, index, arr), thisValue)



filter()
- trả vể tất cả các phần tử có trong điều kiện filter
- trả về 1 mảng mới


findIndex() - Tìm index(vị trí) của phần tử thỏa mãn điều kiện chỉ định trong mảng JavaScript
find() - Tìm giá trị của phần tử thỏa mãn điều kiện chỉ định trong mảng JavaScript





concat()
nối (nối) hai hoặc nhiều mảng.
trả về một mảng mới, chứa các mảng đã nối.
không thay đổi các mảng hiện có.




indexOf() 
trả về chỉ mục đầu tiên của một giá trị được chỉ định.
trả về -1 nếu giá trị không được tìm thấy.
### details   
array.indexOf(item, start)
item là Giá trị cần tìm kiếm
start - bắt đầu tìm từ chỉ mục





Reduce() 
thực thi một hàm giảm thiểu cho phần tử mảng.
trả về một giá trị duy nhất: kết quả tích lũy của hàm.
không thay đổi mảng ban đầu.



-->











## Exports
![image](https://user-images.githubusercontent.com/67332180/151310476-892c7581-e16c-4241-8c65-77e2e378b622.png)







![z3179794452672_1954048a1d2defbca64b436aa1d16a7a](https://user-images.githubusercontent.com/67332180/153788833-02a0b43e-e1b1-440b-ba79-7c5bade835c5.jpg)







