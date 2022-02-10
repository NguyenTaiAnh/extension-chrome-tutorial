<h2>Create extension chrome tutorial</h2>
<b>Note in file manifest.json</b>
<p>name: name Extension</p>
<p>description: description Extension</p>
<p>version: version Extension</p>
<p>browser_action.default_icon: Path to the extension's icon file</p>
<p>browser_action.default_popup: The first file called when the user opens your extension</p>
<p>permissions: The permissions the extension wants to use. As my extension needs to access the current URL of the tab, so I need to declare permissions as tabs</p>
<p>manifest_version: Is the version of the manifest.json file specified by google.</p>
<p>background: Background scripts, like many other important components, must be registered in the manifest. Registering a background script in the manifest tells the extension which file to reference, and how that file should behave.</p>
<p>action: Like the background script, this file must be declared in the manifest in order for Chrome to present it in the extension's popup. To do this, add an action object to the manifest and set index.html as the action's default_popup.</p>
<pre>
/* "action": {
    "default_popup": "index.html"
}
}*/
</pre>
<hr>
<br>
<h2>Hướng dẫn tạo extension chrome</h2>
<b>Chú thích trong file manifest.json</b>
<br>
<p>name: Tên của extension</p>
<p>description: Mô tả ngắn gọn cho extension</p>
<p>version: Phiên bản của extension. Mỗi khi có cập nhật cho extension, bạn nhất định phải thay đổi giá trị này thì extension của bạn mới có thể tự động cập nhật trên trình duyệt của người dùng</p>
<p>browser_action.default_icon: Đường dẫn tới file icon của extension</p>
<p>browser_action.default_popup: File đầu tiên được gọi đến khi người dùng mở extension của bạn.</p>
<p>permissions: Các quyền mà extension muốn sử dụng. Như extension của mình cần truy cập vào URL hiện tại của tab, vì vậy mình cần khai báo permissions là tabs</p>
<p>manifest_version: Là phiên bản của file manifest.json do google quy định.</p>
<p>background: Tập lệnh background, giống như nhiều thành phần quan trọng khác, phải được đăng ký trong tệp kê khai. Việc đăng ký tập lệnh nền trong tệp kê khai sẽ cho phần mở rộng biết tệp nào sẽ tham chiếu và tệp đó sẽ hoạt động như thế nào.</p>
<p>action: Giống như tập lệnh background, tệp này phải được khai báo trong tệp kê khai để Chrome hiển thị tệp đó trong cửa sổ bật lên của tiện ích. Để thực hiện việc này, hãy thêm một đối tượng hành động vào tệp kê khai và đặt index.html làm default_popup của hành động.</p>
<pre>
/* "action": {
    "default_popup": "index.html"
}
}*/
</pre>
<p>
<br>
<h4>Link Tutorial:</h4>
<a href="https://developer.chrome.com/docs/extensions/mv3/getstarted/">https://developer.chrome.com/docs/extensions/mv3/getstarted/</a>
<br/>
<a href="https://topdev.vn/blog/cach-build-chrome-extension/">https://topdev.vn/blog/cach-build-chrome-extension/</a>
<br/>
<a href="https://wiki.tino.org/huong-dan-viet-extension-chrome/">https://wiki.tino.org/huong-dan-viet-extension-chrome/</a>
<br/>
<a href="https://phambinh.net/bai-viet/huong-dan-tao-extension-chrome-va-dua-len-store-chi-trong-5-phut/">https://phambinh.net/bai-viet/huong-dan-tao-extension-chrome-va-dua-len-store-chi-trong-5-phut/</a>
