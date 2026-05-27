// SaveSpend images
import saveSpendHome from "../assets/images/saveSpend-images/SaveSpendHome-img.png";
import saveSpendImg1 from "../assets/images/saveSpend-images/SaveSpend-img1.png";
import saveSpendImg2 from "../assets/images/saveSpend-images/SaveSpend-img2.png";
import saveSpendImg3 from "../assets/images/saveSpend-images/SaveSpend-img3.png";
import saveSpendImg4 from "../assets/images/saveSpend-images/SaveSpend-img4.png";
// Skinstric images
import skinstricHome from "../assets/images/skinstric-images/SkinstricHome-img.png";
import skinstricImg1 from "../assets/images/skinstric-images/Skinstric1.png";
import skinstricImg2 from "../assets/images/skinstric-images/Skinstric2.png";
import skinstricImg3 from "../assets/images/skinstric-images/Skinstric3.png";
import skinstricImg4 from "../assets/images/skinstric-images/Skinstric4.png";
// Designer images
import ecommercestore from "../assets/images/e-commerce-images/e-commerce-project.png";
import designer1 from "../assets/images/e-commerce-images/Designer1.png";
import designer2 from "../assets/images/e-commerce-images/Designer2.png";
import designer3 from "../assets/images/e-commerce-images/Designer3.png";
import designer4 from "../assets/images/e-commerce-images/Designer4.png";
// Ultraverse images
import ultramarket from "../assets/images/ultraverse-images/UltraverseHome.png";
import ultraverse1 from "../assets/images/ultraverse-images/Ultraverse1.png";
import ultraverse2 from "../assets/images/ultraverse-images/Ultraverse2.png";
import ultraverse3 from "../assets/images/ultraverse-images/Ultraverse3.png";
import ultraverse4 from "../assets/images/ultraverse-images/Ultraverse4.png";
// Summarist images
import summarist1 from "../assets/images/summarist-images/Summarist1.png";
import summarist2 from "../assets/images/summarist-images/Summarist2.png";
import summarist3 from "../assets/images/summarist-images/Summarist3.png";
import summarist4 from "../assets/images/summarist-images/Summarist4.png";
import summaristHomeImg from "../assets/images/summarist-images/SummaristHome-img.png";
// Movie images
import movieapi from "../assets/images/movieApi-images/MovieAPI.jpg";
import movie1 from "../assets/images/movieApi-images/Movie1.png";
import movie2 from "../assets/images/movieApi-images/Movie2.png";
import movie3 from "../assets/images/movieApi-images/Movie3.png";
import movie4 from "../assets/images/movieApi-images/Movie4.png";

const projectsInfo = [
  {
    id: "save-spend",
    name: "SaveSpend",
    subtitle: "Tracking all your expenses in one place",
    description: "Budgeting app for tracking expenses — 2025",
    overView:
      "SaveSpend is a personal finance web app that helps people learn how to save smarter and see exactly where their money goes. Built with Next.js, Tailwind CSS, Firebase, and the OpenAI API, it guides users through budgeting, tracking expenses, and even chatting with an AI finance assistant for personalized tips.",
    image: saveSpendHome,
    link: "https://save-spend.vercel.app/",
    info: [
      {
        title: "Client",
        subTitle: "SaveSpend",
      },
      {
        title: "Industry",
        subTitle: "A.I Fianace",
      },
      {
        title: "Preview",
        subTitle: "Live site",
      },
      {
        title: "Timeline",
        subTitle: "Aug 2025 - Oct 2025",
      },
    ],
    images: [saveSpendImg1, saveSpendImg2, saveSpendImg3, saveSpendImg4],
  },
  {
    id: "skinstric",
    name: "Skinstric",
    subtitle: 'A routine tailored to what your skin needs',
    description: "A.I Powered skin analysis platform — 2025",
    descriptionTablet: "A.I analysis platform",
    overView: "I Redesigned Skinstric.ai and made it more modern. I created this project using NextjS 14. I implemented a camera that uses artificial intelligence (AI) to scan a user's face and display their gender, age, and race. Added a backend database using Prisma, Express.js, and PostgresSQL",
    image: skinstricHome,
    link: "https://skintric-project.vercel.app/",
    info: [
      {
        title: "Client",
        subTitle: "Skinstric",
      },
      {
        title: "Industry",
        subTitle: "AI-powered skincare platform",
      },
      {
        title: "Preview",
        subTitle: "Live site",
      },
      {
        title: "Timeline",
        subTitle: "Mar 2025 - Apr 2025",
      },
    ],
    images: [skinstricImg2, skinstricImg1, skinstricImg3, skinstricImg4],
  },
  {
    id: "designer-product",
    name: "Designer E-Commerce",
    subtitle: 'Elevated essentials for the modern closet.',
    description: "An e-commerce UI for adding clothing products to your cart.",
    descriptionTablet: "E-Commerce",
    overView: 'StyleNest is a clean, modern, mobile-responsive e-commerce storefront designed to showcase premium fashion apparel and accessories. It functions as a sleek, interactive catalog that mimics a real-world shopping experience.',
    image: ecommercestore,
    link: "https://designer-product-e-commerce.vercel.app/",
    info: [
      {
        title: "Client",
        subTitle: "Designer Products",
      },
      {
        title: "Industry",
        subTitle: "E-Commerce",
      },
      {
        title: "Preview",
        subTitle: "Live site",
      },
      {
        title: "Timeline",
        subTitle: "Mar 2025 - Apr 2025",
      },
    ],
    images: [designer1, designer2, designer4, designer3],
  },
  {
    id: "ultraverse-market",
    name: "Ultraverse Market",
    subtitle: "Create, sell or collect digital items.",
    description: "NFT Marketplace Internship Project",
    descriptionTablet: "NFT Marketplace",
    overView: "In this project, I completely transformed a static HTML, CSS, JavaScript, and React single-page application into an interactive user interface using animations, transitions, and carousels. I fetched the user's data from an API request and made it dynamic. I utilized Git version controls and interface to work and thrive in a virtual and collaborative team environment.",
    image: ultramarket,
    link: "https://ben-internship-murex.vercel.app/",
    info: [
      {
        title: "Client",
        subTitle: "Ultraverse Market",
      },
      {
        title: "Industry",
        subTitle: "NFT",
      },
      {
        title: "Preview",
        subTitle: "Live site",
      },
      {
        title: "Timeline",
        subTitle: "Jan 2025 - Jan 2025",
      },
    ],
    images: [ultraverse1, ultraverse2, ultraverse3, ultraverse4],
  },
  {
    id: "summarist",
    name: "Summarist",
    subtitle: "Great summaries for busy people, individuals who barely have time to read, and even people who don’t like to read.",
    description:
      "A book summary platform that provides key insights, audio versions, and text summaries of popular non-fiction titles",
    descriptionTablet: "Online audiobooks ",
    overView: "This site was developed as part of my internship preparation and showcases both my front-end skills and my ability to deliver production-ready websites using modern tools. It serves as a professional landing page to introduce myself to recruiters and potential clients.",
    image: summaristHomeImg,
    link: "https://ben-internship-v2.vercel.app/",
    info: [
      {
        title: "Client",
        subTitle: "Summarist",
      },
      {
        title: "Industry",
        subTitle: "Online Audiobook",
      },
      {
        title: "Preview",
        subTitle: "Live site",
      },
      {
        title: "Timeline",
        subTitle: "Jun 2025 - Jun 2025",
      },
    ],
    images: [summarist1, summarist2, summarist3, summarist4],
  },
  {
    id: "movie-api",
    name: "Movie Api",
    subtitle: "Search for you favorite movies",
    description:
      "Movie website that allows users to search for movies, view details, and watch trailers using the TMDB API.",
    descriptionTablet: "Movie website",
    overView: "Created a website that displays any movie that the user searches for and includes a sorting option that goes from newest to oldest or vice versa.",
    image: movieapi,
    link: "https://movie-api-v2-alpha.vercel.app/",
    info: [
      {
        title: "Client",
        subTitle: "Movie API",
      },
      {
        title: "Industry",
        subTitle: "Movies",
      },
      {
        title: "Preview",
        subTitle: "Live site",
      },
      {
        title: "Timeline",
        subTitle: "Mar 2025 - Apr 2025",
      },
    ],
    images: [movie1, movie2, movie4, movie3],
  },
];

export default projectsInfo;
