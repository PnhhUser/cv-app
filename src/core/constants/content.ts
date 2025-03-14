import { InfoBase } from "../../shared/models/baseModel";

const CAREER_OBJECTIVE: string = `
Chào mọi người!
Tôi là người thực tế, tư duy logic và đề cao sự chân thật. Đã tốt nghiệp <a href="https://vku.udn.vn/vi/" target="_blank"><u>Trường Cao đẳng CNTT Việt - Hàn</u></a> với <u> bằng cử nhân Công nghệ Thông tin</u>. Trong một năm đầu phát triển sự nghiệp, tôi đã đồng hành cùng các công ty startup, tham gia nhiều dự án khác nhau để trau dồi kỹ năng và kinh nghiệm.
Tuy nhiên, đã phải tạm gác lại đam mê để hoàn thành nghĩa vụ quân sự trong 2 năm - quãng thời gian trong môi trường quân ngũ giúp bản thân rèn luyện kỷ luật, tinh thần trách nhiệm và ý chí bền bỉ.
Giờ đây, tôi quyết tâm quay lại với con đường sự nghiệp, sẵn sàng học hỏi, cập nhật kiến thức và nâng cao chuyên môn để phát triển bản thân cũng như đóng góp giá trị cho doanh nghiệp.
`.trim();

const INFO_OBJECT: InfoBase = {
  name: "Phùng Ngọc Huy Hoàng",
  born: "24-3-2000",
  address: "Hòa An, Cẩm Lệ, Tp. Đà Nẵng",
  phoneNumber: "0869318340",
  email: "pnhh240300@gmail.com",
  college: "Trường cao đẳng công nghệ thông tin Việt - Hàn",
  major: "Ứng dụng phần mềm",
  degree: "Bằng Cử nhân Công nghệ Thông tin",
  gpa: 2.9,
  fromYear: 2018,
  toYear: 2021,
  techField: "Web Developer",
};

const TARGET_TXT: string = "Mục tiêu";
const EXPERIENCE_TXT: string = "Kinh nghiệm";
const TECH_TXT: string = "Công nghệ";
const PROJECT_TXT: string = "Dự án";

export const CONTENT_WEB = {
  CAREER_OBJECTIVE,
  INFO_OBJECT,
  TARGET_TXT,
  EXPERIENCE_TXT,
  TECH_TXT,
  PROJECT_TXT,
};
