import React from "react";
import { about } from "../../data";
import "./about.css";

function About() {
  return (
    <section className="about-container  grid wide">
      <div className="about-top">
        <h1 className="about-heading">Giới thiệu</h1>
        <p className="top-text">
          Fast Food được thành lập vào năm 2013 với cơ sở nhà hàng đầu tiên mang
          lại các món ăn phương Tây kết hợp với đặc sản Việt Nam phụ vụ mọi
          người. Nhưng tinh Hoa văn hóa Việt được Fast Food điều chế tinh tế đặc
          sắc để lại dấu ấn lướn cho mọi người ngay những ngày đầu tiên.
        </p>
      </div>
      <div className="about-mid">
        <div className="row">
          <div className="col l-4 m-4 c-6">
            <div className="about-content">
              <h5 className="mid-heading">Mục tiêu của chúng tôi</h5>
              <p className="mid-text">
                Chúng tôi tin tưởng vào sức mạnh khai triển của công nghệ và
                mong muốn góp phần làm cho thế giới trở nên tốt đẹp hơn bằng
                việc kết nối cộng đồng người mua và người bán thông qua việc
                cung cấp một nền tảng thương mại điện tử.
              </p>
            </div>
          </div>
          <div className="col l-4 m-4 c-6">
            <div className="about-content">
              <h5 className="mid-heading">Định vị của chúng tôi</h5>
              <p className="mid-text">
                Đối với người dùng trên toàn khu vực, Shopee mang đến trải
                nghiệm mua sắm trực tuyến tích hợp với vô số sản phẩm đa dạng
                chủng loại, cộng đồng người dùng năng động và chuỗi dịch vụ liền
                mạch.
              </p>
            </div>
          </div>
          <div className="col l-4 m-4 c-6">
            <div className="about-content">
              <h5 className="mid-heading">
                Đặc điểm về con người của chúng tôi
              </h5>
              <p className="mid-text">
                Để định nghĩa chúng tôi là ai - thông qua lời nói hay cách ứng
                xử trong nhiều trường hợp khác nhau - thì thực chất, chúng tôi
                Gần gũi, Vui vẻ và Đồng lòng. Đây là những đặc tính chính và nổi
                bật trong từng bước đường phát triển của Shopee.S
              </p>
            </div>
          </div>
        </div>
        <div className="about-img-wrapper">
          <div className="row">
            {about.map((item) => {
              return (
                <div className="col l-4 m-4 c-6">
                  <div className="about-content">
                    <img src={item.img} className="about-img" />
                    <h5 className="mid-heading">{item.heading}</h5>
                    <p className="mid-text">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="about-discount">
        <h1 className="about-heading">Khuyến mãi</h1>
        <div className="row">
          <div className="col l-6 c-12 m-12">
            <img src="/images/about1.jpg" className="about-discount-img" />
          </div>
          <div className="col l-6 c-12 m-12">
            <p className="discount-text">
              1. SUMMER DEAL Mua bất kì Pizza L +99.000d được ngay 1 Mỳ Ý Bò
              Truyền Thống, 1 Bánh Mỳ Bơ Tỏi và 6 Xiên Gà nướng kiểu Malaysia{" "}
              <br />
              2. HAPPY DEAL Mua bất kì Pizza L or XL +100.000đ được ngay bánh mì
              bơ tỏi, Salad hoàng đế và Mì Ý bò bằm <br />
              3. FRIDAY DEAL 2 Pizza Lớn + 1,5L Coca chỉ với 249.000đ Với không
              gian thoải mái, thân thiện, sự phục vụ nhiệt tình chuyên nghiệp,
              Fast Food chính là sự lựa chọn tuyệt vời giúp bạn thư giãn nhẹ
              nhàng sau những giờ phút hối hả và bận rộn của cuộc sống hàng
              ngày.
              <br /> Hy vọng bài viết trên đã giúp bạn có được gợi ý về không
              gian nhà hàng lý tưởng cho buổi hẹn hay dịp tổ chức tiệc đặc biệt
              sắp tới. Đừng quên chia sẻ cảm nhận của bạn khi đến với nhà hàng
              Delta Food cùng chúng tôi nhé!
            </p>
          </div>
        </div>
      </div>
      <div className="about-payment">
        <h1 className="about-heading">Thanh toán</h1>
        <div className="row">
          <div className="col l-6 c-12 m-12">
            <p className="payment-text">
            Các hình thức thanh toán<br/>
            Thanh toán khi nhận hàng (COD / Cash On Delivery)<br/>
            Chuyển khoản thanh toán<br/>
            Thanh toán bằng thẻ tín dụng, thẻ ghi nợ (Visa/ Mastercard) hoặc  thẻ ATM nội địa
            </p>
          </div>
          <div className="col l-6 c-12 m-12">
            <img src="/images/about6.jpg" className="about-payment-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
