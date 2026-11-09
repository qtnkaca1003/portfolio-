import type { PageId } from "./portfolio"

export type Locale = "en" | "vi"

type ProjectCopy = {
  title: string
  summary: string
  points: string[]
}

type Copy = {
  lang: string
  title: string
  description: string
  pages: Record<PageId, string>
  themeLight: string
  themeDark: string
  themeToLight: string
  themeToDark: string
  menuOpen: string
  menuClose: string
  nav: string
  mobileNav: string
  loading: string
  close: string
  scroll: string
  scrollUp: string
  location: string
  home: {
    hello: string
    andIm: string
    roles: string[]
    summary: string
  }
  about: {
    kicker: string
    title: string
    role: string
    body: string
    birthday: string
    age: string
    address: string
    email: string
    phone: string
    nationality: string
    nationalityValue: string
    study: string
    school: string
    degreeLabel: string
    degree: string
    interestLabel: string
    interest: string
    freelanceLabel: string
    freelance: string
    download: string
    programming: string
    languages: string
    languageNames: Record<string, string>
    knowledge: string
    interests: string
    interestItems: string[]
    education: string
    note: string
    experience: string
    jobRole: string
  }
  products: {
    kicker: string
    title: string
    all: string
    filter: string
    skills: string
    view: string
    client: string
    date: string
    stack: string
    items: Record<string, ProjectCopy>
  }
  contact: {
    kicker: string
    title: string
    based: string
    download: string
    name: string
    email: string
    message: string
    send: string
    required: string
    sent: string
    subject: (name: string) => string
  }
}

const en: Copy = {
  lang: "Language",
  title: "Nhan Quach | Frontend Software Engineer",
  description:
    "Quach Trong Nhan — Frontend Software Engineer with 3+ years building React, Next.js, and TypeScript products for POS, banking, and enterprise teams.",
  pages: { home: "Home", about: "About", products: "Products", contact: "Contact" },
  themeLight: "Light",
  themeDark: "Dark",
  themeToLight: "Switch to light theme",
  themeToDark: "Switch to dark theme",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  nav: "Primary",
  mobileNav: "Mobile",
  loading: "Loading",
  close: "Close",
  scroll: "Scroll down",
  scrollUp: "Scroll up",
  location: "Ho Chi Minh City",
  home: {
    hello: "Hello, it's Me",
    andIm: "And I'm a",
    roles: ["FrontEnd Developer", "React Developer", "Next.js Developer", "Vue.js Developer"],
    summary:
      "Frontend Software Engineer with 3+ years across POS, banking, workforce management, and enterprise applications. I build responsive, maintainable interfaces with React.js, Next.js, TypeScript, Redux, and Material UI, and integrate them with REST APIs.",
  },
  about: {
    kicker: "About",
    title: "About Me",
    role: "Frontend Developer",
    body:
      "I have shipped a salon POS platform serving 3,000+ merchants and enterprise applications for Japanese clients. I work with designers and backend developers in Agile teams, and I use AI coding agents such as GitHub Copilot, Codex, Claude Code, and Cursor. One specialty is taking a module from a requirement through to a screen that staff can use every day, then staying with the bugs and the QC notes after it ships.",
    birthday: "Birthday",
    age: "Age",
    address: "Address",
    email: "Email",
    phone: "Phone",
    nationality: "Nationality",
    nationalityValue: "Vietnam",
    study: "Study",
    school: "Saigon University of Technology",
    degreeLabel: "Degree",
    degree: "Information technology",
    interestLabel: "Interest",
    interest: "Product interfaces",
    freelanceLabel: "Freelance",
    freelance: "Available",
    download: "Download CV",
    programming: "Programming Skills",
    languages: "Language Skills",
    languageNames: { Vietnamese: "Vietnamese" },
    knowledge: "Knowledge",
    interests: "Interests",
    interestItems: ["Product interfaces", "Booking flows", "Salon POS screens", "API-backed pages", "Accessible UI"],
    education: "Education",
    note: "Classification Good",
    experience: "Experience",
    jobRole: "Frontend developer",
  },
  products: {
    kicker: "products",
    title: "Products",
    all: "All",
    filter: "Filter projects",
    skills: "Skills",
    view: "view project details",
    client: "Client",
    date: "Date",
    stack: "Stack",
    items: {
      "POS System": {
        title: "Runs the salon day",
        summary:
          "Point of sale for salon and retail. The day covers appointment scheduling, customers, the waiting list, check-in, tickets, payment, the portal, and receipt printing. The platform serves 3,000 merchants.",
        points: [
          "Built and maintained features from business requirements, merchant requests, and daily operations.",
          "Owned Appointment Scheduling, Waiting List, Customer Management, Portal, and Check-in.",
          "Shipped improvements from QC/QA feedback.",
          "Investigated bugs and production issues reported by merchants.",
          "Supported Ticket Management and Receipt Printing.",
          "Worked with the team, QC/QA, and stakeholders to clarify requirements.",
          "Proposed changes that improved usability, performance, and the interface.",
        ],
      },
      "Booking Online": {
        title: "Books a nail appointment",
        summary: "Online booking for nail appointments across salon locations. The flow also takes a deposit, an OTP check, and reCAPTCHA.",
        points: [
          "Built and updated booking features from business and merchant requirements.",
          "Fixed bugs in the booking interface and the workflow.",
          "Shortened the steps so a customer can finish a reservation more easily.",
          "Kept deposit payment, OTP verification, and reCAPTCHA on the flow.",
          "Worked with the team on the existing booking screens.",
        ],
      },
      Gensai: {
        title: "Posts a disaster alert",
        summary:
          "Disaster alerts for Japan, built in the same months as Remote Work Cloud. People photograph an event, post the image, and share the location while it is happening.",
        points: [
          "A visitor can register, or post an alert without an account.",
          "The post takes a camera photo or an upload, plus the disaster location.",
          "Each alert has comments, and the screens load from a REST API.",
        ],
      },
      "Remote Work Cloud": {
        title: "Tracks a remote team",
        summary: "Remote workforce management, with reusable Vue 3 and Nuxt 3 screens.",
        points: [
          "Built responsive screens and reusable components for workforce features.",
          "Integrated the REST API through Axios with the backend team.",
        ],
      },
      "Sumika Kanri": {
        title: "Lists a bank loan",
        summary: "Loan information for a Japanese bank: listings, application forms, and approval steps.",
        points: [
          "Built the modules in React.js and TypeScript.",
          "Integrated REST APIs and Firebase, and managed async data with Redux and RxJS.",
          "Kept the interface stable across screen sizes.",
        ],
      },
      "Kobelco ER": {
        title: "Files a leave request",
        summary: "Internal leave management: create, update, and read an employee leave request.",
        points: ["Built the React.js forms for the leave workflow.", "Integrated REST APIs with Axios and kept state in Redux."],
      },
    },
  },
  contact: {
    kicker: "Contact",
    title: "Get in Touch",
    based: "Based in",
    download: "Download CV",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send message",
    required: "Please fill in name, email, and a message.",
    sent: "Opening your email app with this message.",
    subject: (name) => `Portfolio note from ${name}`,
  },
}

const vi: Copy = {
  lang: "Ngôn ngữ",
  title: "Quách Trọng Nhân | Kỹ sư phần mềm Frontend",
  description:
    "Quách Trọng Nhân — kỹ sư phần mềm Frontend với hơn 3 năm xây sản phẩm React, Next.js và TypeScript cho POS, ngân hàng và các đội doanh nghiệp.",
  pages: { home: "Trang chủ", about: "Giới thiệu", products: "Sản phẩm", contact: "Liên hệ" },
  themeLight: "Sáng",
  themeDark: "Tối",
  themeToLight: "Chuyển sang giao diện sáng",
  themeToDark: "Chuyển sang giao diện tối",
  menuOpen: "Mở menu",
  menuClose: "Đóng menu",
  nav: "Điều hướng chính",
  mobileNav: "Menu di động",
  loading: "Đang tải",
  close: "Đóng",
  scroll: "Cuộn xuống",
  scrollUp: "Cuộn lên",
  location: "Thành phố Hồ Chí Minh",
  home: {
    hello: "Xin chào, tôi là",
    andIm: "Tôi là",
    roles: ["Lập trình viên Frontend", "Lập trình viên React", "Lập trình viên Next.js", "Lập trình viên Vue.js"],
    summary:
      "Kỹ sư phần mềm Frontend với hơn 3 năm ở POS, ngân hàng, quản lý nhân sự và ứng dụng doanh nghiệp. Tôi xây giao diện dễ bảo trì bằng React.js, Next.js, TypeScript, Redux và Material UI, rồi nối chúng với REST API.",
  },
  about: {
    kicker: "Giới thiệu",
    title: "Về tôi",
    role: "Lập trình viên Frontend",
    body:
      "Tôi đã đưa nền tảng POS cho salon phục vụ hơn 3.000 cửa hàng, và các ứng dụng doanh nghiệp cho khách hàng Nhật. Tôi làm việc với designer và backend trong nhóm Agile, và dùng các trợ lý lập trình như GitHub Copilot, Codex, Claude Code và Cursor. Một việc tôi theo đến cùng là đưa một module từ yêu cầu thành màn hình nhân viên dùng mỗi ngày, rồi ở lại với lỗi và ghi chú QC sau khi phát hành.",
    birthday: "Ngày sinh",
    age: "Tuổi",
    address: "Địa chỉ",
    email: "Email",
    phone: "Điện thoại",
    nationality: "Quốc tịch",
    nationalityValue: "Việt Nam",
    study: "Trường",
    school: "Đại học Công nghệ Sài Gòn",
    degreeLabel: "Bằng cấp",
    degree: "Công nghệ thông tin",
    interestLabel: "Sở thích",
    interest: "Giao diện sản phẩm",
    freelanceLabel: "Freelance",
    freelance: "Sẵn sàng",
    download: "Tải CV",
    programming: "Kỹ năng lập trình",
    languages: "Ngoại ngữ",
    languageNames: { Vietnamese: "Tiếng Việt" },
    knowledge: "Kiến thức",
    interests: "Quan tâm",
    interestItems: ["Giao diện sản phẩm", "Luồng đặt lịch", "Màn hình POS salon", "Trang nối API", "Giao diện dễ tiếp cận"],
    education: "Học vấn",
    note: "Xếp loại Khá",
    experience: "Kinh nghiệm",
    jobRole: "Lập trình viên Frontend",
  },
  products: {
    kicker: "sản phẩm",
    title: "Sản phẩm",
    all: "Tất cả",
    filter: "Lọc dự án",
    skills: "Kỹ năng",
    view: "xem chi tiết dự án",
    client: "Khách hàng",
    date: "Thời gian",
    stack: "Công nghệ",
    items: {
      "POS System": {
        title: "Vận hành một ngày ở salon",
        summary:
          "Phần mềm bán hàng cho salon và bán lẻ. Một ngày gồm lịch hẹn, khách hàng, danh sách chờ, check-in, phiếu dịch vụ, thanh toán, cổng thông tin và in hóa đơn. Nền tảng phục vụ 3.000 cửa hàng.",
        points: [
          "Xây và bảo trì tính năng từ yêu cầu nghiệp vụ, yêu cầu của cửa hàng và vận hành hằng ngày.",
          "Phụ trách lịch hẹn, danh sách chờ, quản lý khách hàng, cổng thông tin và check-in.",
          "Đưa các chỉnh sửa từ phản hồi QC/QA lên sản phẩm.",
          "Điều tra lỗi và sự cố trên production do cửa hàng báo.",
          "Hỗ trợ quản lý phiếu dịch vụ và in hóa đơn.",
          "Làm việc với nhóm, QC/QA và các bên liên quan để làm rõ yêu cầu.",
          "Đề xuất thay đổi để dùng dễ hơn, chạy nhanh hơn và giao diện rõ hơn.",
        ],
      },
      "Booking Online": {
        title: "Đặt lịch nail",
        summary: "Đặt lịch nail trực tuyến cho nhiều chi nhánh. Luồng còn nhận tiền cọc, xác minh OTP và reCAPTCHA.",
        points: [
          "Xây và cập nhật tính năng đặt lịch từ yêu cầu nghiệp vụ và cửa hàng.",
          "Sửa lỗi trên giao diện và luồng đặt lịch.",
          "Rút ngắn các bước để khách hoàn tất đặt chỗ dễ hơn.",
          "Giữ thanh toán cọc, xác minh OTP và reCAPTCHA trong luồng.",
          "Làm việc với nhóm trên các màn hình đặt lịch hiện có.",
        ],
      },
      Gensai: {
        title: "Đăng cảnh báo thiên tai",
        summary:
          "Cảnh báo thiên tai cho Nhật Bản, làm cùng thời điểm với Remote Work Cloud. Người dùng chụp sự việc, đăng ảnh và chia sẻ vị trí ngay khi việc đang diễn ra.",
        points: [
          "Khách có thể đăng ký, hoặc đăng cảnh báo không cần tài khoản.",
          "Bài đăng nhận ảnh từ camera hoặc tệp tải lên, kèm vị trí thiên tai.",
          "Mỗi cảnh báo có bình luận, và các màn hình tải dữ liệu từ REST API.",
        ],
      },
      "Remote Work Cloud": {
        title: "Theo dõi nhóm làm từ xa",
        summary: "Quản lý nhân sự làm từ xa, với các màn hình Vue 3 và Nuxt 3 dùng lại được.",
        points: [
          "Xây màn hình responsive và component dùng lại cho các tính năng nhân sự.",
          "Nối REST API qua Axios cùng nhóm backend.",
        ],
      },
      "Sumika Kanri": {
        title: "Liệt kê khoản vay ngân hàng",
        summary: "Thông tin khoản vay cho một ngân hàng Nhật: danh sách, form hồ sơ và các bước duyệt.",
        points: [
          "Xây các module bằng React.js và TypeScript.",
          "Nối REST API và Firebase, quản lý dữ liệu bất đồng bộ bằng Redux và RxJS.",
          "Giữ giao diện ổn định trên nhiều kích thước màn hình.",
        ],
      },
      "Kobelco ER": {
        title: "Gửi đơn nghỉ phép",
        summary: "Quản lý nghỉ phép nội bộ: tạo, cập nhật và xem đơn nghỉ của nhân viên.",
        points: ["Xây form React.js cho luồng nghỉ phép.", "Nối REST API bằng Axios và giữ trạng thái trong Redux."],
      },
    },
  },
  contact: {
    kicker: "Liên hệ",
    title: "Liên hệ",
    based: "Đang ở",
    download: "Tải CV",
    name: "Tên",
    email: "Email",
    message: "Tin nhắn",
    send: "Gửi tin nhắn",
    required: "Hãy điền tên, email và nội dung.",
    sent: "Đang mở ứng dụng email với tin nhắn này.",
    subject: (name) => `Ghi chú từ portfolio của ${name}`,
  },
}

export const messages: Record<Locale, Copy> = { en, vi }

const monthVi: Record<string, string> = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
}

export const formatPeriod = (period: string, locale: Locale) => {
  if (locale === "en") return period
  const withMonths = period.replace(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/g, (month) => monthVi[month] ?? month)
  return withMonths.replace(/(\d{2}) (\d{4})/g, "$1/$2")
}
