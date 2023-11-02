"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

function Header() {
  const [currentStyle, setCurrentStyle] = useState({
    className: "py-8 bg-transparent text-white",
    iconColor: "white",
    logoColor: ["white", "white", "white"],
  });

  useEffect(() => {
    const onPageScroll = () => {
      setCurrentStyle(
        window.pageYOffset > 16
          ? {
              className: "py-6 bg-white/90 shadow-2xl text-black",
              iconColor: "#D61924",
              logoColor: ["#ED2024", "#8B181A", "black"],
            }
          : {
              className: "py-8 bg-transparent text-white",
              iconColor: "white",
              logoColor: ["white", "white", "white"],
            }
      );
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <section id="header">
      <header
        className={`flex justify-between items-center fixed top-0 inset-x-0 px-16 z-30 ${currentStyle.className} duration-300 ease-linear`}
        style={{ backdropFilter: "blur(5px)" }}
      >
        <div className="flex items-center gap-12">
          <Link href="/">
            <svg
              width="200"
              height="32"
              viewBox="0 0 200 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0896 25.8586C13.3441 22.2579 15.4399 17.9938 17.0117 13.4634C17.7214 11.4164 18.3129 9.32412 18.853 7.22575C19.1384 6.11689 19.5063 5.07666 20.2116 4.17774C21.0673 3.08748 21.9197 1.99214 22.8485 0.966113C23.1117 0.676391 23.5055 0.503639 23.8819 0.31466C24.0541 0.228453 24.245 0.188223 24.3164 0.234538C24.3881 0.280853 24.4356 0.473552 24.4281 0.664559C24.4091 1.20918 24.4118 1.7582 24.3089 2.28694C22.7007 10.5861 19.7886 18.3359 14.4058 24.9972C12.1643 27.771 9.44452 29.9718 5.98686 31.1101C4.04333 31.7494 2.04714 31.9587 0 31.6331C4.14457 31.0668 7.3634 28.8748 10.0896 25.8586Z"
                fill={currentStyle.logoColor[0]}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.7191 25.8586C21.9736 22.2579 24.0693 17.9938 25.6412 13.4634C26.3509 11.4164 26.9423 9.32412 27.4825 7.22575C27.7689 6.11689 28.1358 5.07666 28.841 4.17774C29.6968 3.08748 30.5495 1.99214 31.4779 0.966113C31.7402 0.676391 32.1359 0.503639 32.5113 0.31466C32.6836 0.228453 32.8755 0.188223 32.9468 0.234538C33.0168 0.280853 33.0651 0.473552 33.0586 0.664559C33.0386 1.20918 33.0413 1.7582 32.9384 2.28694C31.3301 10.5861 28.4184 18.3359 23.0352 24.9972C20.7938 27.771 18.075 29.9718 14.6163 31.1101C12.6728 31.7494 10.6776 31.9587 8.62946 31.6331C12.774 31.0668 15.9929 28.8748 18.7191 25.8586Z"
                fill={currentStyle.logoColor[1]}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.3483 25.8586C30.6028 22.2579 32.6982 17.9938 34.269 13.4634C34.9801 11.4164 35.5702 9.32412 36.1113 7.22575C36.3977 6.11689 36.7649 5.07666 37.4699 4.17774C38.3256 3.08748 39.1783 1.99214 40.1071 0.966113C40.37 0.676391 40.7648 0.503639 41.1402 0.31466C41.3124 0.228453 41.5044 0.188223 41.5747 0.234538C41.6457 0.280853 41.6943 0.473551 41.6868 0.664559C41.6674 1.20918 41.6701 1.7582 41.5672 2.28694C39.959 10.5861 37.0469 18.336 31.6641 24.9972C29.4226 27.771 26.7038 29.9718 23.2452 31.1101C21.3016 31.7494 19.3065 31.9587 17.2583 31.6331C21.4029 31.0668 24.622 28.8748 27.3483 25.8586Z"
                fill={currentStyle.logoColor[2]}
              />
              <path
                d="M67.2674 7.51288V18.2174C67.2674 18.7306 67.6856 19.1461 68.2002 19.1461H69.977C70.4927 19.1461 70.9098 18.7306 70.9098 18.2174V7.18462C70.9098 4.09571 68.1218 2.52979 62.6221 2.52979H56.6332C51.076 2.52979 48.2591 4.10754 48.2591 7.21876V18.2171C48.2591 18.7303 48.6763 19.1457 49.192 19.1457H50.933C51.4491 19.1457 51.8659 18.7303 51.8659 18.2171V7.52978C51.8659 6.72924 52.5321 6.16298 53.8587 5.84385C54.6159 5.64878 55.4384 5.55041 56.3033 5.55041H62.6221C63.5138 5.55041 64.3658 5.64169 65.1567 5.82255C66.5577 6.13898 67.2674 6.70761 67.2674 7.51288Z"
                fill={currentStyle.logoColor[2]}
              />
              <path
                d="M96.5059 3.54288C95.1426 2.85897 93.4919 2.51245 91.5976 2.51245H84.7577C82.4762 2.51245 80.5255 2.87993 78.9635 3.60305C76.97 4.51617 76.0015 5.8681 76.0015 7.73693V13.8353C76.0015 15.2697 76.6646 16.4742 78.0279 17.5155C79.3589 18.5402 81.9387 19.0598 85.695 19.0598H87.6328C88.1488 19.0598 88.566 18.644 88.566 18.1311V17.0023C88.566 16.4898 88.1484 16.074 87.6328 16.074H87.2054C82.199 16.074 79.7645 15.0987 79.7645 13.0922V12.5466H98.0309C98.5469 12.5466 98.9641 12.1311 98.9641 11.6183V7.0804C98.9641 5.51786 98.1586 4.35964 96.5059 3.54288ZM79.6086 9.44078V7.51279C79.6086 6.12672 81.0684 5.48101 84.2019 5.48101H91.0418C95.4442 5.48101 95.4442 7.03611 95.4442 7.54693V9.44078H79.6086Z"
                fill={currentStyle.logoColor[2]}
              />
              <path
                d="M127.107 3.37193C127.107 2.85942 126.688 2.4436 126.173 2.4436H124.38C123.865 2.4436 123.446 2.85942 123.446 3.37193V14.0078C123.446 15.3746 121.837 16.0396 118.524 16.0396H112.552C109.157 16.0396 107.507 15.3581 107.507 13.9561V3.37193C107.507 2.85942 107.09 2.4436 106.574 2.4436H104.832C104.317 2.4436 103.899 2.85942 103.899 3.37193V14.1285C103.899 17.4345 106.809 19.042 112.795 19.042H118.263C120.868 19.042 122.86 18.782 124.19 18.2678C126.153 17.4994 127.107 16.1451 127.107 14.1285V3.37193H127.107Z"
                fill={currentStyle.logoColor[2]}
              />
              <path
                d="M142.816 2.52979H141.121C135.649 2.52979 132.989 4.19916 132.989 7.63357V18.2343C132.989 18.7475 133.408 19.163 133.923 19.163H135.665C136.18 19.163 136.597 18.7475 136.597 18.2343V7.63357C136.597 6.25088 137.973 5.55041 140.688 5.55041H142.816C143.332 5.55041 143.749 5.13459 143.749 4.62174V3.45879C143.749 2.94561 143.332 2.52979 142.816 2.52979Z"
                fill={currentStyle.logoColor[2]}
              />
              <path
                d="M171.046 13.9219V7.78874C171.046 4.2502 168.398 2.52979 162.95 2.52979H156.839C154.691 2.52979 152.808 2.92769 151.237 3.71471C149.325 4.68191 148.395 6.02607 148.395 7.82356V13.9216C148.395 15.7343 149.326 17.0541 151.241 17.9544C152.769 18.6765 154.659 19.0423 156.856 19.0423H162.95C165.144 19.0423 166.977 18.6839 168.398 17.977C170.179 17.0903 171.046 15.7637 171.046 13.9219ZM152.002 13.7492V7.99598C152.002 7.0974 152.722 6.42464 154.155 5.99124C155.073 5.69848 155.994 5.55007 156.891 5.55007H162.846C163.773 5.55007 164.624 5.65893 165.398 5.87934C166.305 6.11734 167.386 6.62985 167.386 7.7191V13.7488C167.386 14.5632 166.707 15.1924 165.371 15.6167C164.478 15.8969 163.634 16.0392 162.863 16.0392H156.908C156.043 16.0392 155.143 15.9169 154.233 15.6758C152.753 15.283 152.002 14.6346 152.002 13.7492Z"
                fill={currentStyle.logoColor[2]}
              />
              <path
                d="M195.492 7.51288V18.2174C195.492 18.7306 195.91 19.1461 196.425 19.1461H198.201C198.717 19.1461 199.134 18.7306 199.134 18.2174V7.18462C199.134 4.09571 196.346 2.52979 190.847 2.52979H184.859C179.302 2.52979 176.484 4.10754 176.484 7.21876V18.2171C176.484 18.7303 176.902 19.1457 177.417 19.1457H179.159C179.674 19.1457 180.092 18.7303 180.092 18.2171V7.52978C180.092 6.72924 180.757 6.16298 182.082 5.84385C182.841 5.64878 183.664 5.55041 184.528 5.55041H190.848C191.74 5.55041 192.591 5.64169 193.381 5.82255C194.783 6.13898 195.492 6.70795 195.492 7.51288Z"
                fill={currentStyle.logoColor[2]}
              />
              <path
                d="M54.6981 24.7805C53.614 24.7805 52.833 24.9526 52.3764 25.2923L52.2297 25.4012L52.0931 25.2815C51.7153 24.9492 50.9442 24.7809 49.8007 24.7809C48.1581 24.7809 47.3928 25.2927 47.3928 26.3914V29.5824C47.3928 29.7109 47.4977 29.815 47.6261 29.815H48.1663C48.2951 29.815 48.3997 29.7109 48.3997 29.5824V26.4337C48.3997 26.1896 48.5227 25.8573 49.1114 25.6598C49.6821 25.4692 50.4183 25.4658 50.9941 25.6531C51.5815 25.8407 51.7048 26.1608 51.7048 26.3965V29.5824C51.7048 29.7109 51.8088 29.815 51.9382 29.815H52.4875C52.6159 29.815 52.7209 29.7109 52.7209 29.5824V26.407C52.7209 26.1737 52.8347 25.8593 53.3803 25.6865C53.8963 25.5138 54.6152 25.5145 55.2355 25.6896C55.7495 25.8414 56.0097 26.0882 56.0097 26.4228V29.5824C56.0097 29.7109 56.114 29.815 56.2434 29.815H56.7826C56.912 29.815 57.016 29.7109 57.016 29.5824V26.3914C57.0149 25.292 56.2788 24.7805 54.6981 24.7805Z"
                fill={currentStyle.logoColor[2]}
              />
              <path
                d="M71.6279 25.1159C71.2271 24.8934 70.7049 24.7805 70.0775 24.7805H68.9506C68.8219 24.7805 68.7169 24.8843 68.7169 25.0124V25.3194C68.7169 25.4479 68.8219 25.552 68.9506 25.552H70.0775C70.8622 25.552 71.2108 25.7001 71.2108 26.0331V26.2572H67.2653C66.6531 26.2572 66.1262 26.3674 65.7019 26.5855C65.1879 26.8461 64.9481 27.2021 64.9481 27.7072V28.3596C64.9481 28.8245 65.2079 29.1784 65.7427 29.4431C66.2003 29.6686 66.7251 29.7829 67.3037 29.7829H70.0771C72.1008 29.7829 72.3349 28.9401 72.3349 28.3062V26.2951C72.3349 25.7646 72.1036 25.3786 71.6279 25.1159ZM67.2391 27.0763H71.329V27.6963C71.329 28.2105 71.2808 28.4986 71.1676 28.6571C70.9682 28.932 70.5144 28.9634 70.1909 28.9634H67.2697C66.397 28.9634 65.954 28.7203 65.954 28.2416V27.862C65.9543 27.2122 66.6534 27.0763 67.2391 27.0763Z"
                fill={currentStyle.logoColor[2]}
              />
              <path
                d="M82.1226 27.1414L84.2924 24.9946C84.3596 24.9287 84.3797 24.8283 84.344 24.7414C84.3076 24.6545 84.2231 24.5977 84.1279 24.5977H83.6788C83.6167 24.5977 83.5579 24.6224 83.5141 24.6664L81.1778 27.0034V23.595C81.1778 23.4669 81.0728 23.3628 80.9444 23.3628H80.4158C80.2874 23.3628 80.1824 23.4669 80.1824 23.595V29.5819C80.1824 29.7103 80.2874 29.8144 80.4158 29.8144H80.9444C81.0728 29.8144 81.1778 29.7103 81.1778 29.5819V27.4088L83.5141 29.7455C83.5579 29.7894 83.617 29.8141 83.6788 29.8141H84.2574C84.2611 29.8134 84.2638 29.8138 84.2672 29.8141C84.3956 29.8141 84.5006 29.71 84.5006 29.5815C84.5006 29.4973 84.4551 29.4236 84.3878 29.3831L82.1226 27.1414Z"
                fill={currentStyle.logoColor[2]}
              />
              <path
                d="M98.1155 25.0879C97.7007 24.88 97.1979 24.7742 96.6214 24.7742H94.503C93.8069 24.7742 93.21 24.8864 92.7317 25.1068C92.1368 25.3796 91.847 25.7816 91.847 26.337V28.2248C91.847 28.6515 92.0454 29.0098 92.4528 29.3208C92.8546 29.6305 93.6418 29.7877 94.7934 29.7877H95.3934C95.5218 29.7877 95.6267 29.6836 95.6267 29.5551V29.2059C95.6267 29.0777 95.5218 28.9736 95.3934 28.9736H95.2609C93.6727 28.9736 92.9012 28.6535 92.9012 27.9946V27.7708H98.6129C98.7423 27.7708 98.8463 27.6667 98.8463 27.5382V26.1332C98.8459 25.8394 98.7705 25.4114 98.1155 25.0879ZM92.853 26.9199V26.2671C92.853 25.8009 93.3231 25.5835 94.3307 25.5835H96.4492C97.8679 25.5835 97.8679 26.1065 97.8679 26.2786V26.9199H92.853Z"
                fill={currentStyle.logoColor[2]}
              />
              <path
                d="M118.395 24.9141H117.856C117.727 24.9141 117.622 25.0179 117.622 25.146V29.55C117.622 29.6781 117.727 29.7822 117.856 29.7822H118.395C118.524 29.7822 118.629 29.6781 118.629 29.55V25.146C118.629 25.0179 118.524 24.9141 118.395 24.9141Z"
                fill={currentStyle.logoColor[2]}
              />
              <path
                d="M118.643 23.4406C118.365 23.2326 117.936 23.2411 117.679 23.4331C117.547 23.5271 117.488 23.6407 117.488 23.802C117.488 23.9629 117.549 24.0819 117.679 24.1762C117.81 24.2702 117.967 24.3158 118.159 24.3158C118.349 24.3158 118.508 24.2685 118.645 24.1728C118.822 24.0508 118.844 23.9115 118.844 23.8178C118.844 23.661 118.779 23.5403 118.643 23.4406Z"
                fill={currentStyle.logoColor[2]}
              />
              <path
                d="M130.269 24.8282H128.272V23.5997C128.272 23.4712 128.167 23.3674 128.038 23.3674H127.498C127.37 23.3674 127.265 23.4712 127.265 23.5997V24.8282H126.654C126.526 24.8282 126.421 24.932 126.421 25.0605V25.4094C126.421 25.5378 126.526 25.6419 126.654 25.6419H127.265V29.5818C127.265 29.7102 127.37 29.8144 127.498 29.8144H128.038C128.167 29.8144 128.272 29.7102 128.272 29.5818V25.6419H130.269C130.398 25.6419 130.503 25.5378 130.503 25.4094V25.0605C130.503 24.932 130.398 24.8282 130.269 24.8282Z"
                fill={currentStyle.logoColor[2]}
              />
              <path
                d="M155.251 25.0872C154.835 24.88 154.334 24.7742 153.757 24.7742H151.639C150.943 24.7742 150.346 24.8864 149.867 25.1068C149.272 25.3796 148.983 25.7816 148.983 26.337V28.2248C148.983 28.6518 149.181 29.0101 149.588 29.3208C149.99 29.6305 150.777 29.7877 151.928 29.7877H152.529C152.658 29.7877 152.762 29.6836 152.762 29.5551V29.2059C152.762 29.0777 152.658 28.9736 152.529 28.9736H152.397C150.808 28.9736 150.037 28.6535 150.037 27.9946V27.7708H155.748C155.877 27.7708 155.981 27.6667 155.981 27.5382V26.1332C155.981 25.8394 155.905 25.4114 155.251 25.0872ZM149.988 26.9199V26.2671C149.988 25.8009 150.457 25.5835 151.466 25.5835H153.585C155.002 25.5835 155.002 26.1065 155.002 26.2786V26.9199H149.988Z"
                fill={currentStyle.logoColor[2]}
              />
              <path
                d="M170.433 25.1159C170.033 24.8934 169.511 24.7805 168.883 24.7805H167.756C167.627 24.7805 167.522 24.8843 167.522 25.0124V25.3194C167.522 25.4479 167.627 25.552 167.756 25.552H168.883C169.667 25.552 170.016 25.7001 170.016 26.0331V26.2572H166.071C165.459 26.2572 164.933 26.3674 164.507 26.5858C163.992 26.8464 163.754 27.2028 163.754 27.7072V28.3596C163.754 28.8238 164.014 29.1784 164.549 29.4431C165.006 29.6686 165.531 29.7829 166.109 29.7829H168.883C170.906 29.7829 171.14 28.9401 171.14 28.3062V26.2951C171.14 25.7646 170.909 25.3789 170.433 25.1159ZM166.044 27.0763H170.135V27.6963C170.135 28.2112 170.086 28.4986 169.973 28.6568C169.772 28.9316 169.32 28.9634 168.996 28.9634H166.074C165.202 28.9634 164.76 28.7203 164.76 28.2416V27.862C164.76 27.2122 165.458 27.0763 166.044 27.0763Z"
                fill={currentStyle.logoColor[2]}
              />
              <path
                d="M183.261 26.8233H181.38C180.983 26.8233 180.744 26.8179 180.644 26.8064C180.306 26.7726 179.903 26.6576 179.903 26.3003V26.0698C179.903 25.6404 180.592 25.6049 181.298 25.6049H182.255C182.384 25.6049 182.488 25.5008 182.488 25.3723V25.0119C182.488 24.8838 182.384 24.78 182.255 24.78H181.251C180.536 24.78 179.997 24.8473 179.648 24.9795C179.135 25.1715 178.897 25.5065 178.897 26.0322V26.3101C178.897 27.2171 179.706 27.658 181.375 27.658H183.218C183.902 27.658 184.25 27.8361 184.25 28.1874V28.3798C184.25 28.7665 183.87 28.9626 183.121 28.9626H179.146C179.017 28.9626 178.913 29.0664 178.913 29.1952V29.5498C178.913 29.6779 179.017 29.7821 179.146 29.7821H183.116C185.074 29.7821 185.3 28.9822 185.3 28.3804V28.1451C185.3 27.5775 185.088 26.8233 183.261 26.8233Z"
                fill={currentStyle.logoColor[2]}
              />
              <path
                d="M199.767 24.754H199.229C199.099 24.754 198.995 24.8578 198.995 24.9859V28.9257H195.54C194.552 28.9257 194.05 28.6884 194.05 28.2202V24.9856C194.05 24.8574 193.946 24.7537 193.817 24.7537H193.277C193.148 24.7537 193.043 24.8574 193.043 24.9856V28.2733C193.043 28.6357 193.043 29.7398 195.541 29.7398H199.024L198.992 29.9927C198.949 30.3351 198.459 30.4021 197.626 30.4021H196.567C196.437 30.4021 196.333 30.5059 196.333 30.6343V30.965C196.333 31.0924 196.436 31.1965 196.565 31.1975L197.108 31.2006H197.109C197.967 31.2006 198.616 31.1269 199.035 30.9822C199.684 30.7648 200 30.3662 200 29.7628V24.9856C200.001 24.8574 199.896 24.754 199.767 24.754Z"
                fill={currentStyle.logoColor[2]}
              />
            </svg>
          </Link>
          <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/product">Product</Link>
            <Link href="/methodology">Methodology</Link>
            <Link href="/article">Article</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/career">Career</Link>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <select className="bg-transparent w-12 cursor-pointer border-none outline-none">
            <option className="text-black" value="EN">
              EN
            </option>
            <option className="text-black" value="ID">
              ID
            </option>
            <option className="text-black" value="JA">
              JA
            </option>
            <option className="text-black" value="CN">
              zh-CN
            </option>
          </select>
          <div className="flex gap-3">
            <Link href="https://www.linkedin.com">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0072 0C18.8292 0 19.6033 0.157706 20.3297 0.473118C21.0562 0.78853 21.6918 1.21864 22.2366 1.76344C22.7814 2.30824 23.2115 2.94385 23.5269 3.67025C23.8423 4.39665 24 5.17085 24 5.99283V17.9785C24 18.8005 23.8423 19.5795 23.5269 20.3154C23.2115 21.0514 22.7814 21.6918 22.2366 22.2366C21.6918 22.7814 21.0562 23.2115 20.3297 23.5269C19.6033 23.8423 18.8292 24 18.0072 24H5.99283C5.17085 24 4.39665 23.8423 3.67025 23.5269C2.94385 23.2115 2.30824 22.7814 1.76344 22.2366C1.21864 21.6918 0.78853 21.0514 0.473118 20.3154C0.157706 19.5795 0 18.8005 0 17.9785V5.99283C0 5.17085 0.157706 4.39665 0.473118 3.67025C0.78853 2.94385 1.21864 2.30824 1.76344 1.76344C2.30824 1.21864 2.94385 0.78853 3.67025 0.473118C4.39665 0.157706 5.17085 0 5.99283 0H18.0072ZM8.25806 9.00358H5.24731V18.7527H8.25806V9.00358ZM6.76702 8.22939C7.16846 8.22939 7.51732 8.08602 7.81362 7.79928C8.10992 7.51254 8.25806 7.1589 8.25806 6.73835C8.25806 6.3178 8.10992 5.96416 7.81362 5.67742C7.51732 5.39068 7.16846 5.24731 6.76702 5.24731C6.34648 5.24731 5.98805 5.39068 5.69176 5.67742C5.39546 5.96416 5.24731 6.3178 5.24731 6.73835C5.24731 7.1589 5.39546 7.51254 5.69176 7.79928C5.98805 8.08602 6.34648 8.22939 6.76702 8.22939ZM18.7527 13.1039C18.7527 12.4158 18.5615 11.7419 18.1792 11.0824C17.7969 10.4229 17.2999 9.92115 16.6882 9.57706C16.1338 9.27121 15.4887 9.10872 14.7527 9.08961C14.0167 9.07049 13.3524 9.19474 12.7599 9.46237V9.00358H9.7491V18.7527H12.7599V12.7885L13.9928 12.1864C14.1458 12.1099 14.356 12.0717 14.6237 12.0717C14.8913 12.0717 15.092 12.1195 15.2258 12.2151C15.3405 12.2724 15.4552 12.3967 15.5699 12.5878C15.6846 12.779 15.7419 12.951 15.7419 13.1039V18.7527H18.7527V13.1039Z"
                  fill={currentStyle.iconColor}
                />
              </svg>
            </Link>
            <Link href="https://www.twitter.com">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0072 0C18.8292 0 19.6033 0.157706 20.3297 0.473118C21.0562 0.78853 21.6918 1.21864 22.2366 1.76344C22.7814 2.30824 23.2115 2.94385 23.5269 3.67025C23.8423 4.39665 24 5.17085 24 5.99283V17.9785C24 18.8005 23.8423 19.5795 23.5269 20.3154C23.2115 21.0514 22.7814 21.6918 22.2366 22.2366C21.6918 22.7814 21.0562 23.2115 20.3297 23.5269C19.6033 23.8423 18.8292 24 18.0072 24H5.99283C5.17085 24 4.39665 23.8423 3.67025 23.5269C2.94385 23.2115 2.30824 22.7814 1.76344 22.2366C1.21864 21.6918 0.78853 21.0514 0.473118 20.3154C0.157706 19.5795 0 18.8005 0 17.9785V5.99283C0 5.17085 0.157706 4.39665 0.473118 3.67025C0.78853 2.94385 1.21864 2.30824 1.76344 1.76344C2.30824 1.21864 2.94385 0.78853 3.67025 0.473118C4.39665 0.157706 5.17085 0 5.99283 0H18.0072ZM17.7204 9.03226C18.2748 8.64994 18.7622 8.15293 19.1828 7.54122C18.9152 7.65591 18.6428 7.75149 18.3656 7.82796C18.0884 7.90442 17.8065 7.96177 17.5197 8C18.1505 7.59857 18.5711 7.05376 18.7814 6.36559C18.2079 6.72879 17.5962 6.96774 16.9462 7.08244C16.3728 6.47073 15.6559 6.16487 14.7957 6.16487C14.3943 6.16487 14.0167 6.24134 13.6631 6.39427C13.3094 6.54719 13.0036 6.75747 12.7455 7.02509C12.4875 7.29271 12.282 7.60335 12.129 7.95699C11.9761 8.31063 11.8996 8.68817 11.8996 9.08961C11.8996 9.2043 11.9044 9.31422 11.914 9.41935C11.9235 9.52449 11.9379 9.63441 11.957 9.7491C10.7527 9.69176 9.63441 9.39068 8.60215 8.84588C7.56989 8.30107 6.69056 7.58901 5.96416 6.70968C5.69654 7.14934 5.56272 7.6368 5.56272 8.17204C5.56272 8.66906 5.6822 9.12784 5.92115 9.54839C6.1601 9.96894 6.47073 10.313 6.85305 10.5806C6.62366 10.5806 6.39904 10.5472 6.17921 10.4803C5.95938 10.4134 5.74433 10.3321 5.53405 10.2366V10.2652C5.53405 10.9725 5.75866 11.589 6.20789 12.1147C6.65711 12.6404 7.21625 12.9797 7.8853 13.1326C7.61768 13.19 7.35962 13.2186 7.11111 13.2186H6.83871L6.56631 13.1613C6.75747 13.7539 7.09677 14.2366 7.58423 14.6093C8.07168 14.9821 8.64038 15.178 9.29032 15.1971C8.79331 15.5795 8.23417 15.8853 7.6129 16.1147C6.99164 16.3441 6.34648 16.4588 5.67742 16.4588C5.54361 16.4588 5.41935 16.454 5.30466 16.4444C5.18996 16.4349 5.07527 16.4205 4.96057 16.4014C5.61051 16.822 6.31302 17.147 7.0681 17.3763C7.82318 17.6057 8.61171 17.7204 9.43369 17.7204C10.7718 17.7204 11.957 17.4671 12.9892 16.9606C14.0215 16.454 14.8865 15.8041 15.5842 15.0108C16.282 14.2174 16.8124 13.3286 17.1756 12.3441C17.5388 11.3596 17.7204 10.3799 17.7204 9.40502V9.03226Z"
                  fill={currentStyle.iconColor}
                />
              </svg>
            </Link>
            <Link href="https://www.facebook.com">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0072 0C18.8292 0 19.6033 0.157706 20.3297 0.473118C21.0562 0.78853 21.6918 1.21864 22.2366 1.76344C22.7814 2.30824 23.2115 2.94385 23.5269 3.67025C23.8423 4.39665 24 5.17085 24 5.99283V17.9785C24 18.8005 23.8423 19.5795 23.5269 20.3154C23.2115 21.0514 22.7814 21.6918 22.2366 22.2366C21.6918 22.7814 21.0562 23.2115 20.3297 23.5269C19.6033 23.8423 18.8292 24 18.0072 24H5.99283C5.17085 24 4.39665 23.8423 3.67025 23.5269C2.94385 23.2115 2.30824 22.7814 1.76344 22.2366C1.21864 21.6918 0.78853 21.0514 0.473118 20.3154C0.157706 19.5795 0 18.8005 0 17.9785V5.99283C0 5.17085 0.157706 4.39665 0.473118 3.67025C0.78853 2.94385 1.21864 2.30824 1.76344 1.76344C2.30824 1.21864 2.94385 0.78853 3.67025 0.473118C4.39665 0.157706 5.17085 0 5.99283 0H18.0072ZM16.4875 5.24731H13.9642C13.4671 5.24731 13.0084 5.33333 12.5878 5.50538C12.1673 5.67742 11.8041 5.90203 11.4982 6.17921C11.1924 6.45639 10.9486 6.77658 10.767 7.13978C10.5854 7.50299 10.4946 7.86619 10.4946 8.22939V9.7491H8.25806V12.7312H10.4946V18.7527H13.5054V12.7312H15.7419V9.7491H13.5054V9.00358C13.5054 8.75508 13.5962 8.56392 13.7778 8.43011C13.9594 8.2963 14.1171 8.22939 14.2509 8.22939H16.4875V5.24731Z"
                  fill={currentStyle.iconColor}
                />
              </svg>
            </Link>
            <Link href="https://www.instagram.com">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0573 12.0143C16.0573 11.6894 16.0096 11.3357 15.914 10.9534H17.1183V16.7455C17.1183 16.8984 17.0657 17.0227 16.9606 17.1183C16.8554 17.2139 16.7264 17.2616 16.5735 17.2616H7.13978C6.98686 17.2616 6.8626 17.2139 6.76702 17.1183C6.67145 17.0227 6.62366 16.8984 6.62366 16.7455V10.9534H7.79928C7.7037 11.3357 7.65591 11.6894 7.65591 12.0143C7.65591 12.5878 7.76583 13.1326 7.98566 13.6487C8.2055 14.1649 8.50657 14.6093 8.88889 14.9821C9.27121 15.3548 9.72043 15.6511 10.2366 15.871C10.7527 16.0908 11.2975 16.2007 11.871 16.2007C12.4444 16.2007 12.9892 16.0908 13.5054 15.871C14.0215 15.6511 14.466 15.3548 14.8387 14.9821C15.2115 14.6093 15.5078 14.1649 15.7276 13.6487C15.9474 13.1326 16.0573 12.5878 16.0573 12.0143ZM11.871 14.6237C11.5078 14.6237 11.1637 14.5568 10.8387 14.4229C10.5137 14.2891 10.2318 14.1027 9.99283 13.8638C9.75388 13.6249 9.5675 13.3477 9.43369 13.0323C9.29988 12.7168 9.23298 12.3775 9.23298 12.0143C9.23298 11.6511 9.29988 11.307 9.43369 10.9821C9.5675 10.6571 9.75388 10.3751 9.99283 10.1362C10.2318 9.89725 10.5137 9.71087 10.8387 9.57706C11.1637 9.44325 11.5078 9.37634 11.871 9.37634C12.2342 9.37634 12.5735 9.44325 12.8889 9.57706C13.2043 9.71087 13.4815 9.89725 13.7204 10.1362C13.9594 10.3751 14.1458 10.6571 14.2796 10.9821C14.4134 11.307 14.4803 11.6511 14.4803 12.0143C14.4803 12.3775 14.4134 12.7168 14.2796 13.0323C14.1458 13.3477 13.9594 13.6249 13.7204 13.8638C13.4815 14.1027 13.2043 14.2891 12.8889 14.4229C12.5735 14.5568 12.2342 14.6237 11.871 14.6237ZM16.5735 6.76702C16.7264 6.76702 16.8554 6.81482 16.9606 6.91039C17.0657 7.00597 17.1183 7.13023 17.1183 7.28315V8.86022C17.1183 9.01314 17.0657 9.1374 16.9606 9.23298C16.8554 9.32855 16.7264 9.37634 16.5735 9.37634H14.9964C14.8435 9.37634 14.7192 9.32855 14.6237 9.23298C14.5281 9.1374 14.4803 9.01314 14.4803 8.86022V7.28315C14.4803 7.13023 14.5281 7.00597 14.6237 6.91039C14.7192 6.81482 14.8435 6.76702 14.9964 6.76702H16.5735ZM17.9785 0C18.8005 0 19.5795 0.157706 20.3154 0.473118C21.0514 0.78853 21.6918 1.21864 22.2366 1.76344C22.7814 2.30824 23.2115 2.94385 23.5269 3.67025C23.8423 4.39665 24 5.17085 24 5.99283V17.9785C24 18.8005 23.8423 19.5795 23.5269 20.3154C23.2115 21.0514 22.7814 21.6918 22.2366 22.2366C21.6918 22.7814 21.0514 23.2115 20.3154 23.5269C19.5795 23.8423 18.8005 24 17.9785 24H5.99283C5.17085 24 4.39665 23.8423 3.67025 23.5269C2.94385 23.2115 2.30824 22.7814 1.76344 22.2366C1.21864 21.6918 0.78853 21.0514 0.473118 20.3154C0.157706 19.5795 0 18.8005 0 17.9785V5.99283C0 5.17085 0.157706 4.39665 0.473118 3.67025C0.78853 2.94385 1.21864 2.30824 1.76344 1.76344C2.30824 1.21864 2.94385 0.78853 3.67025 0.473118C4.39665 0.157706 5.17085 0 5.99283 0H17.9785ZM18.6953 6.76702C18.6953 6.32736 18.5424 5.9546 18.2366 5.64875C17.9307 5.34289 17.5579 5.18996 17.1183 5.18996H6.62366C6.18399 5.18996 5.81123 5.34289 5.50538 5.64875C5.19952 5.9546 5.0466 6.32736 5.0466 6.76702V17.2616C5.0466 17.7013 5.19952 18.0741 5.50538 18.3799C5.81123 18.6858 6.18399 18.8387 6.62366 18.8387H17.1183C17.5579 18.8387 17.9307 18.6858 18.2366 18.3799C18.5424 18.0741 18.6953 17.7013 18.6953 17.2616V6.76702Z"
                  fill={currentStyle.iconColor}
                />
              </svg>
            </Link>
            <Link href="https://www.youtube.com">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0072 0C18.8292 0 19.6033 0.157706 20.3297 0.473118C21.0562 0.78853 21.6918 1.21864 22.2366 1.76344C22.7814 2.30824 23.2115 2.94385 23.5269 3.67025C23.8423 4.39665 24 5.17085 24 5.99283V17.9785C24 18.8005 23.8423 19.5795 23.5269 20.3154C23.2115 21.0514 22.7814 21.6918 22.2366 22.2366C21.6918 22.7814 21.0562 23.2115 20.3297 23.5269C19.6033 23.8423 18.8292 24 18.0072 24H5.99283C5.17085 24 4.39665 23.8423 3.67025 23.5269C2.94385 23.2115 2.30824 22.7814 1.76344 22.2366C1.21864 21.6918 0.78853 21.0514 0.473118 20.3154C0.157706 19.5795 0 18.8005 0 17.9785V5.99283C0 5.17085 0.157706 4.39665 0.473118 3.67025C0.78853 2.94385 1.21864 2.30824 1.76344 1.76344C2.30824 1.21864 2.94385 0.78853 3.67025 0.473118C4.39665 0.157706 5.17085 0 5.99283 0H18.0072ZM10.1792 10.8961C10.1792 11.3357 10.3226 11.6798 10.6093 11.9283C10.8769 12.1768 11.2593 12.3011 11.7563 12.3011C12.2724 12.3011 12.6643 12.1768 12.9319 11.9283C13.2186 11.6989 13.362 11.3548 13.362 10.8961V8.25806C13.362 7.89486 13.2186 7.57945 12.9319 7.31183C12.6643 7.06332 12.2915 6.93907 11.8136 6.93907C11.3166 6.93907 10.9247 7.05376 10.638 7.28315C10.3321 7.51254 10.1792 7.82796 10.1792 8.22939V10.8961ZM8.63082 12.3011H5.24731V13.2186H6.39427V18.6093H7.48387V13.2186H8.63082V12.3011ZM8.6595 9.319L10.0932 5.24731H8.83154L8.08602 8.02867H8L7.19713 5.24731H5.96416L7.42652 9.43369V12.1864H8.6595V9.319ZM11.8423 13.9642H10.8674V17.491C10.8292 17.5484 10.7814 17.5962 10.724 17.6344L10.552 17.7491C10.4373 17.8065 10.3513 17.8351 10.2939 17.8351C10.1983 17.8351 10.1314 17.816 10.0932 17.7778C10.055 17.7395 10.0358 17.6535 10.0358 17.5197V13.9642H9.06093V17.8638C9.06093 18.1314 9.11828 18.3321 9.23298 18.466C9.34767 18.6189 9.51016 18.6953 9.72043 18.6953C9.89247 18.6953 10.0836 18.638 10.2939 18.5233C10.466 18.4468 10.6571 18.3035 10.8674 18.0932V18.6093H11.8423V13.9642ZM15.3692 15.0824C15.3692 14.7001 15.2832 14.4038 15.1111 14.1935C14.9773 14.0024 14.7479 13.9068 14.4229 13.9068C14.2509 13.9068 14.098 13.945 13.9642 14.0215C13.8112 14.0789 13.6774 14.184 13.5627 14.3369V12.3011H12.5591V18.6093H13.5627V18.2652C13.6201 18.3417 13.6822 18.4038 13.7491 18.4516C13.816 18.4994 13.8877 18.5424 13.9642 18.5806C14.098 18.638 14.27 18.6667 14.4803 18.6667C14.767 18.6667 14.9869 18.5806 15.1398 18.4086C15.2927 18.2174 15.3692 17.9689 15.3692 17.6631V15.0824ZM15.0251 12.2437C15.2545 12.2437 15.4648 12.1959 15.6559 12.1004C15.8471 12.0048 16.0573 11.8423 16.2867 11.6129V12.1864H17.3763V7.05376H16.2867V10.9534C16.2103 11.049 16.0956 11.1446 15.9427 11.2401C15.828 11.2975 15.7324 11.3262 15.6559 11.3262C15.5221 11.3262 15.4456 11.2975 15.4265 11.2401C15.3692 11.1828 15.3405 11.0968 15.3405 10.9821V7.05376H14.2509V11.3548C14.2509 11.6607 14.3178 11.8805 14.4516 12.0143C14.5472 12.1673 14.7384 12.2437 15.0251 12.2437ZM18.7527 15.2258C18.7527 14.767 18.6284 14.4229 18.3799 14.1935C18.1505 13.9642 17.8065 13.8495 17.3477 13.8495C16.908 13.8495 16.5544 13.9737 16.2867 14.2222C16.0191 14.4898 15.8853 14.8244 15.8853 15.2258V17.2903C15.8853 17.7491 16.0096 18.1027 16.2581 18.3513C16.5257 18.6189 16.8698 18.7527 17.2903 18.7527C17.7682 18.7527 18.1314 18.6284 18.3799 18.3799C18.6284 18.1505 18.7527 17.7873 18.7527 17.2903V17.0609H17.7491V17.2616C17.7491 17.5484 17.7204 17.73 17.6631 17.8065C17.5866 17.8829 17.4719 17.9211 17.319 17.9211C17.1278 17.9211 17.0131 17.8734 16.9749 17.7778C16.9176 17.7013 16.8889 17.5293 16.8889 17.2616V16.4014H18.7527V15.2258ZM17.319 14.6523C17.4719 14.6523 17.5771 14.7001 17.6344 14.7957C17.7109 14.8722 17.7491 15.006 17.7491 15.1971V15.6846H16.8889V15.1971C16.8889 15.0251 16.9176 14.8913 16.9749 14.7957C17.0705 14.7001 17.1852 14.6523 17.319 14.6523ZM13.9642 14.6523C14.098 14.6523 14.1935 14.6906 14.2509 14.767C14.3274 14.8435 14.3656 14.9582 14.3656 15.1111V17.5197C14.3656 17.6726 14.3369 17.7778 14.2796 17.8351C14.2222 17.9116 14.1362 17.9498 14.0215 17.9498C13.945 17.9498 13.8686 17.9307 13.7921 17.8925C13.6965 17.8542 13.6201 17.7969 13.5627 17.7204V14.8244C13.6392 14.7479 13.7061 14.7001 13.7634 14.681C13.8017 14.6619 13.8686 14.6523 13.9642 14.6523ZM11.7563 11.4122C11.6033 11.4122 11.4982 11.374 11.4409 11.2975C11.3453 11.2401 11.2975 11.135 11.2975 10.9821V8.20072C11.2975 8.10514 11.3453 8.00956 11.4409 7.91398C11.5173 7.85663 11.6225 7.82796 11.7563 7.82796C11.8901 7.82796 12.0143 7.85663 12.129 7.91398C12.2055 7.99044 12.2437 8.08602 12.2437 8.20072V10.9821C12.2437 11.135 12.2055 11.2401 12.129 11.2975C12.0526 11.374 11.9283 11.4122 11.7563 11.4122Z"
                  fill={currentStyle.iconColor}
                />
              </svg>
            </Link>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Header;
