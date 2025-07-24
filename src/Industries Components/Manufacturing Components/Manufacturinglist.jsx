import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import Queries from '../Banking Components/Queries';

import { Link } from 'react-scroll';

const Manufacturinglist = () => {
  const overviewRef = useRef(null);
  const serveRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const queriesRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const [isNavFixed, setIsNavFixed] = useState(false);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // This is for rpa offering cards

  const[ManufacturingServe,setManufacturingServe]=useState([
    {
      title: 'Automotive',
      description: 'We offer end-to-end digital transformation services and engineering solutions for the automotive industry, integrating technology expertise with a deep understanding of business needs. Our comprehensive services cover product development, supply chain, manufacturing and after-sales support.'
    },
    {
      title: 'Metals and Mining',
      description: "QubicGen facilitates the digital transformation of Metals & Mining industries by empowering them to embrace innovative and sustainable solutions that enhance business value."
    },
    {
      title: 'Process',
      description: 'QubicGen empowers process manufacturing clients to embrace Industry 4.0, leveraging advanced digital technologies such as IIoT, IT-OT integration, digital industrial networks, collaborative supply chains, analytics and artificial intelligence (AI).'
    },
   
    
  ]);


  const [ManufacturingOffering, setManufacturingOffering] = useState([
    {
        title: 'Enterprise Resource Planning (ERP) Systems',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Manufacturing/Manufacturing/manufacturing_erp.jpeg',
        description: 'Implementation, customization and support of ERP systems to integrate and streamline various business processes such as production planning, inventory management, procurement and supply chain management.'
    },
    {
        title: 'Manufacturing Execution Systems (MES)',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Manufacturing/Manufacturing/manufacturing_mes.jpeg',
        description: 'Development and deployment of MES solutions to monitor, control and optimize manufacturing processes in real-time, including shop floor operations, production scheduling, quality control and equipment maintenance.'
    },
    {
        title: 'Supply Chain Management (SCM)',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Manufacturing/Manufacturing/manufacturing_supply%20chain%20execution.jpeg',
        description: 'Implementation of SCM solutions to optimize supply chain operations, including supplier management, procurement, logistics, inventory optimization and demand forecasting, to reduce costs and improve efficiency.'
    },
    {
        title: 'Product Lifecycle Management (PLM)',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Manufacturing/Manufacturing/maufacturing_productlifecyclemanagement.webp',
        description: 'Provision of PLM solutions to manage the entire lifecycle of products from conception to disposal, including product design, engineering, manufacturing and service, to accelerate time-to-market and improve product quality.'
    },
    {
        title: 'Quality Management Systems (QMS)',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Manufacturing/Manufacturing/maufacturing_qms.jpeg',
        description: 'Development and implementation of QMS solutions to ensure compliance with quality standards and regulations, manage non-conformance issues, track corrective actions and drive continuous improvement in manufacturing processes.'
    },
    {
        title: 'Internet of Things (IoT) Integration',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Manufacturing/Manufacturing/maufacturing_iot.avif',
        description: 'Integration of IoT technologies into manufacturing processes to collect real-time data from sensors, equipment and production lines, enabling predictive maintenance, remote monitoring and optimization of production processes.'
    },
 
    {
        title: 'Digital Twin Solutions',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Manufacturing/Manufacturing/manufacturing_digital_twin.avif',
        description: 'Development of digital twin solutions to create virtual replicas of physical assets, processes and systems, enabling simulation, optimization and predictive analysis to improve efficiency, performance and innovation in manufacturing operations.'
    },
    {
        title: 'Robotics and Automation Solutions',
        background: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMWFRUXFxUXFxcYGBsYGBcXGBUYFxgYFxcYHSggHRslHhcXITEhJSktLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0lHx0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0rLSstKy0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABCEAACAQIEAwYDBQcDAwMFAAABAhEAAwQSITEFQVEGEyJhcYGRofAUMkKxwQcjUmJy0eGCsvEkM6IVwtIXNENzkv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHBEBAQEAAgMBAAAAAAAAAAAAAAERAhIhMUFh/9oADAMBAAIRAxEAPwDrFChQqBjiOEF609ptnUr6SND7HX2riVy2VYqwhlJUjoQYNd1Fcs/aBgO6xRcfdujOP6how/I/6q6cKxzjO0qk0pa6OQ6AoUKoWpo5pApU0CqMGiFHRB0dEKFAoGlimwaUGoFA0oUSgnaT6TRUC4oUmaMmgVR1ucP2Uwai2l263eusgZgs6Scojb+1GOBcMKhu+JDNkB7wat028x8RWe0a61haBqy4zwtbGIe1nkKRBI1ggMAfODTC4Gdifhp6VdTDfD7aNdtq5hWdAx2gFgCZ5VvB2csz/wDZAajX7Q2gzlSd/wCGG94qmXgv/TZ4WNG+7rAXKy55jNmJIO8qBtWYfCONSKntr0k4qzbF24qkwHcLqCCAxA156Ug4ccqiHSpNq/pB9qrJ/uUZYAyt1kke8n8v8VAdSDBqV3w6xQxF5WAGXUfiX9R0oIdCaJqTNVBk0RNETRGgPNQpM0KDtNQ8dxFLehMt05+9K4jixbQtz2HrXNeNG9cud/YINxfCVYwt5JnKT+FgSSrfzEHQ6cJHobZeKOx6CpLOHEMAw/mAI+BrAW+2eFtnLfdrT/iUqXKkbhu7Bg+R18tqv+CdruH3yFt4u3mOgVptknyFwCaotcR2bwl0a2VU9bfgP/jofcGsvxzsZcsg3LR722NSI8ajqQNGHmPhXQ7Fqpy2qsqXjHBjRTWy/aBwAWmF+2IRzDgbK51kdAdff1rGmukrlZgUoUmKFVCgaUKSaANAsUdJBpQNECjBracBGFsYO3evWO9a7cZJyByIZgPvbCF2GpJq3uYzAqb4+yD9wVVv3Ka5jGnl6xprWda6srwHtJ9nt933bN4y0rdKb5NCApn7nwJFDiWCe8bmIgrJXwkFoi3+K5zMKJ03cdTFz2rwuGtizctotrvVJiMo0CkSo2Pi+t6awPG7IsdwVLE8w4kzqQCBIE8qn7Fz5WYGE8/lQOD6H5VYNcGs67xz9NaYJrSY2lnj2Cfu7l1D3qKADlnLprBnUbxPWit4/hcKndwofOPAYDGBO/kNPIVjaVbWTz84E/LSs9V7LzG4ZMVijc1HePkQaMXyALmGoAWBMz6TBqNjMOFJ8UhXyMGEFWWdGg7GDqDyO21WXZ3DC4M2Qu1pSqqCAwl86uAxAmSw300pjtHhRb8IQozhCVkEjICCzQSJZjyP4SedNXPpxePoE7vuLeUmYzDKTtMZd6p3ugEnYEkgCTE8tf1PKohBG4I+VIuOef6k1cTUbE4gljpAPKBoKYzVKhAdd/jTV4DaIHX/ABWmTavFSbTg6fQ+FM3LQHP30pkgjp6z/agfvWukD4/pNR3BH1/enBfMQaaZh9f8UBUJojRUQcUKKioOhdu7pC2wOeb81rKY/iy4TDviCubuwAi9XYws+QJk+hrb9scAbtjMok2yWj+WNY+APtXMe2tkvw+5lElWtvHkGg/7q4z09DM8CwxdGvYglzed2t2gRmuHxM7S2iW5mWOnpoTZ4ng6FfFglI2/d3nNweguKEZvIHXlNSOB4hcmFcjw9ytscodSC6gFvveDPoonIupkQeFsXrblrlxTbyN3knc6wToO7XXUtsBAHKqLn9nvHruFxVrCm8b+ExAbuGbVrbLJyydRoCI22iNRXaEfSvO3BbL3sRhgk+PG3MWu4IsCBmIP3Q5Gn9VegLbaVBXdsLYbCXgdghPupBHzFcdYV1ztjfVcHdzEDMuUTzJI0Hzrkdyt8XPmIGjoBD0PwpXct/CfhW2BCipwWG6flS/srHp8aBkVb8O4Mbg+8Qe7a7lChj3a8ySygE8hqeemlM2cIBynz5VuOzWHW4kqttnXuw4doOVVKiCFaVIIERunOdM2tSaqeFdpnwdkWsgugnNbMlBkaZnQmcwOkaEHU6VOH7QWABOHGvRz/wDGqXiiqzkWypRZCkbGWLEqOksYE7AVBZSNDTIbYf7SdonxbqSgVUByrudYzEnnsPhVQyxGsSJ9KK+IY/2iku871WalrigNDJ86fsXlYxmA/q8I9ydKrBQqmrnCuhaCw+OnONuUx7TUm5I+Ajptr9bVSNhLgti6UOQmA0aE/QPwNHYxjKIB0qYutn2dxmHtEXGa4Lms6MUg8gEGo2351C7TNYusbtprhusRJM5Ij+cabCIqit8QIEkgzyjWfyoHiWhiQeWgjznWpnld8YlWUcCTyA56TPnyj/FNPiIYkICJMTrp5g1X3MSxMk+dOJ3h1G3nVZ1JQE7yOm1IvkAEE+xpt0uHWR6A0kYQnmKBw3FOk6efKld2CIkR5U0mFg6kfCn8o2igj3MJ0PxqO6kbirFRGmvvrTOKmNp/SghUVETQzVQc0KTNCg7dXPu33C2tJ/06hjfLpkJgLmXUpG7akhZA032FdBrKftAsgWluw7ZTlKg5VCtILZvwNrAbzFeePQ4Zfxl3B3Hs30jN98ZQUfozWWgZvNSu9WeDK3ntqtoZmKx3mZ1XMV1FtrzKphgQCOdUHa3G57zKoPdoctsuJfKBBBciT4s3lNansKjPgnuLBbD4qyzEkSLRUCATqRmUAKP4q0jqvZjs7bw5L6vcaM9xjLNA08gByUAAchWrtiqvh9wMARsdatVMCgzvbvCk4cXIzm28nlCtoevPLXOWxfRfnWh7Y8evm7dsZx3QbLCgawASGbeZ3FZImunGOfKpX23+UfGnbeMWNfymq8mimqytVurOhFO5hHn6iPh+tUs0YNMGjGIVgJ8MfDaPjz9asOE8aawpVRbMzJIIYg8iQdR7VlFxTjnQ+1N1+QphrRY7GZ3ztlUxsq5RHn19Zqrx2OJ8KiANJO50A/SorY5zvBPXX+9MTTC0osTuZoA0mhVQsGnbVvMQPieg5k+QH5U1aQkwASegE/lT33UmNW8IB/h0LH30X3aguRfxFjK12032e6oCow8LWxt6NGsGCZnoajcV4YFAu2Tmstz5oT+F/wBD+ta3iuNt4q0FtBmVg14owY908OkDLJPifNGwgcmisxhsU1hjpmQ6Op1VgR8NRWZWqpaFbfhnCeGtaN1y+UsNMzQk6R4BMA82251Lv8H4SveBiR3UZ/Hc0kwI666aTrTsnVz2lLdYcz8avO1XCLVq5bNhibd1M6yS0a8jvBBB1ql+zN9f5q6mF277T1+vKtDw/g/eW1uPfs2i0lVY+LKLndz7tp7iqrhPDg7hXcrLMojQDIAWLNByjVRsZJ5VNTtJiMOiW0KlIYrntjOvjMq3oyk/A+QX8Wfo+MYAWQh71Livmysh0lDlYexquF1TzHxpvi/GruJKm4V8IIUKoUCTJ25mBVeaSFWffrzI+NAXl6iquaE0xEvFuOmv6VEmnHsMBMU1VCpoUUUKDtt66EUsxgDeuc/tI7YWVsd02bLcMFRu6wZBHSY57xWs7XYjLaAmB4mJ6BRz+NcZ43wq/fsDEG2bjYiDaGhyqCxUAE75FL+feAbwK4yO7CYx8zMV+7mbKOQEkiByqbwfihw63BLeI2jlGgJS4HDMfKNo1zeVI4PwwYi93WcLIJkDN7bio9+yLbEZvElwrlIiQD94nbpp50V6J7CYx72EsXgJVliRrBUlCCORla02OLmzc7v/ALmRsv8AVlMe815/7A9uHwF4LM2GYhlmQNdGHxGvlXpHA4tb1tbiEEMJHn60RwuSZ6nX3/zr8qjmun8Z7CWbhL2HNpyScp8STvpzXX19KxPGOzeJsHx2iVJEMniWTykba7AxXSVysqmBoVb4fsvjG1GHcf1Qn+8ip9nsPiTubS+rEn/xBq7DKzNHW3w/7Pv48QP9NufmWH5VZ4fsJhh95rr+4UfJZ+dTtDrXN1o66va7L4RNrCn+qX/3E1mu21hbV3BBLKZbt9LTkAAKoYORlA1zKLg9qdl6VjqAronEH4TafJctrny5ylu3dusqfxMtoNlXzMUqxh+F4nD3LuH7pkCtLpuhCzqDqpG8EU7nSud1LweGnVgddpEAwYJB566U9e4PdFm1fynLcVWgghkzagOCB5a7VG+yMCDp8daus4ue4CmAJPy3jTy2+IqnxF7vLhI+6PCvoOfuZPvUvHXmtWSWlQxVATp9+RImJ6ac2pfDOHC5aDW4LrOdZOYyTEA6aQIg6z1EVCum4BDhrdju7YCsiZtpYlSYLb55jKBoS5rJdrsNdYXnRQLCXSCFj7xJGcjcifDOw2GlX+C7YWksSZLSAtoGcqgAEhiNBoTHXy2xnG+1F27aayQoVnLSBBCls2TTQrMHXXSs8Zdb5WYhdmrzrdJVoUQX5jKCGaR5qGH+oVr27XcPbNmwzHvIzzbty5G2YZ9dRWVw2FVLOV3Ns3NWYLmIQHpIOrDluEHWomFtK15batKlwitkgkFguaJ0961krO40/aC6cY6nD2mNu2iqIXaYMHksaCPLzqnxXCypAuq6tuAZHKZ1+v00HCrs3yXtE4S2zW1UgFEbZSVP3mO5O8tNRGZwb1p0K2yly9aVte7iXXKeQIBUxpPpUVL7EYbN3kjKhkZ5UuD4WPhIMgwup5qI51XdqABiCLir4pKAHMSCSZaIIYkk7c9NqrO9U65dfWjDrBMLMxGs+u0fOrnlN8GL2DSMwBA6a9SOXoaabCpGk++h+FSHusd9unL6/tTLyNvnVREvYeBIMimA0bVNxSkjTbef+KghDMRrVQ59pbTXaiMk0O5PMqPU1ZJwK9EnIugMM6q0HYkE+EH+aKCD3RHI0VSLyvbYo4ysNwRr1+jQoN327tZ7fdTl7y3cWehIEH4xXKcZ2ax16zh86BjaXuyjOUCi22RSkGDKKhzdRzrrva1J7odS3yg1Q2nLOREwYrjPTu53wfsBilui4122jDWEE8o/lArQ8K/Z5h0fO+e405pLGJ9BEjyM1sQiqPEdelEMfZUiWidAJGvp1oIuD7C8OIhsLbPrmn4zNbbgWAtYe2LdlMiDZZYx6ZiaqMDfQ8/71dWG6a0EvG29My/DrWW7U9qLOEw5u3i0E5EVfvO5BIUdNtSdvgDp+/8AOuNftz4LeLWcVbYtbU5Gt8kcmQ4G0NEGdoHWg1n7P+1Zx1lxeUW79pgHUHQqwlHE9YI9VrSm8org/YjiD4Rrt64SWuKBlBG2aZPKZn51dYrtndcwAVHrJrXWp2jrdziaLuwFVGM7Y2E2bMf5da5Re4sz/eLH1/tSRix51erPd0LF9sbrf9u3lHVj+gqnxWMu3v8AuXCdZAAgA+VZ/D8UAEGSOXKpVjiFsmC0aHcEz5aA6/KrjO613A8FiLd1rmUBrgQOzt4mCAhJAk6AnlzqLxC13Ix9+8lvD2riAfutTfAFxSLp2DsWgRH34MmqLjvbHE2bAuWO7uZIW7nDEqNkfQiZkKSeYHWshxTt/i8VbNh7Vhg/hA7sk5joCuZjDCdDWK6T06XY7WLkGHVw4VUBKoQe7GUkQSQTlkaHqdYpWJxpB7yz4Lc6EBV2jUgCSJkEEz8RVTwjsJftCznLPdzMGNvLlW3kJUszES2YKI8zEiZ0XDOyDIS15sok5Uty4MjWZ2O4gDbnVB8SsDFYZhkzGDmtnmY1Wep3B9Naw3CMY2HuKmYmQe6dv/yJsyONPGNmGh56Hbe4bDPYYDuyP3ZJ1GVwraxEgEAggEgjMRJ1jK9ueHqAb6/9i4QWO3c39O7vrporEw3mZ5tM3Es1a8Qsh7QvW2LnLN2QZzas7e06gciD5mk4bY726ATCjUt0A1J9gCfUAc6p+H426UyXRkfTOukNBBBEcpA9x5VdcAVlsvf2N0hE8rQO/wDqIn0y1v4xnlbYtkLTyIAVSPwxCqFEkADTcUyiZDK+HpMAj/c1E7QiwdWEk89yIHw23kGmuFhHuKrtktkwW5/46T50HROGO96wXw5tS7BrivmhLojMQV3BgGDG+/Kq3tRiDaAF10711CgLmy27SmT4jqSzcyBoCI63fAcLasz3Cght4JbNGxnWoXaPgdq8GuXbb540KhidBoMo39IrH1vPDEpcB2AYeQVvlAag1tWEqNv4d481OvzqPdwzpGe2yE/xKUkeUinwrMbYH/cZso5EyQFn3kT/AGrbBu7hjEjUTAPInp/gx5UyikkCNTt1rdjsS0t++UZl8S5CRmjcHMNmg+3nUS52CczF9Z//AFkCfXMY+FTtF61lMXhHtEBxEiRBBHxE61GuWgdeYpy7aKsyNoykqfUGD+VOWsNp4jp/YwdeWun1NVB8G4cq37OcggspgEMu/hDQTGsSDWm4HwfEGw65xOLD5yy5mtsr5Tm1EsczT086zwKrED5a67af5rofC0S9aF29ZIuqDm3UuYjNlBElhpr+VS1ZGV4QuPW0q2wGRS6gwDOV2GhI2008ooUjH3cQ1xm7m4muiqjQqgQoEGNAANKFBpO1SHuQRurA/I/4rJpjEw+He+50ALHr5ATzOg963fE8P3lp05kaeo1H5Vy3tbgnvYE2k+8bllfjdVZPQCZ9BWJ6dGN4l28xQvXMrgKSVCqBCqDBi5GckxOhG+/Ktb+zLiYxJOe3lNlABI0zs75yh9MojltXL+0vCXwt97F0BbiZQQIKxlUggjqpB+M1tuwmOdcYtw3B3eIEBNYDsoJIGw1DVR2E2VbdQfkR71Kw6kfdb2P96iq1PJcqBb3iN5FV3H8ML+Hu2j+JSPQ7qfYgVboQRBEj62pjHYBijd0RmymA2msaa+tUcFAUr5jUSN53GnsfjSMlWuN4FesHLettbPKRIPow0Psaj/Z/P5V1cUQrzoBan28ITpBPOrbh3ZTE3YK2SFP4nOUfPU+woM4EpfdmuicP/Z9sb10f021/97f/ABrT8O7OYWxBS0uYfibxt7E7e0Vm8o1ONc47N9nr1wg9wxRgVcv4UZG0I11OnQHXXlTeJ/Z3Z4aftrM+KtWWDtaChWChgQ+bN4su5ECfIA111/OomKv28pDQQQQQdiCIIrFutyYXw/GW71tLtpg1t1DKRzB+tqk3UDKV2kbjcHkR5g6+1ct7J8cbBWWwqYbE3Ql29kYoqKFLkrrcYSOc+ZpHGu1WJveHv7eFXxAi2xv3G5CYUKoHST60xdaPiV83rNi49u2WdZYG8YlrZJAzDQBgOhkAczVDguLIVe3eQraaUuJdiVb7rE8oJmfMgzrWTFvCLErdvGApLsLYMbaICfmKtLfGbygd0LVmNJt2xnjzuPmb51rqzeUR7HZ5w9yzcFw4e2pa3iVkfujpkzDRnUaAa7DlE2lniCcv3egXIZNtlAhQI1UgR5eY0FUmMvXLhzPce43V2LfCTpTmFDPqBVkxi3V33jD7pBG8N4l9Q6afltR4e0WJOU68wVfX5U1wvAs9xFz+JiBPSdzO8ASfatVw+9aaziGATLaAyC9md7k8ySwyzoAF2kanmpIn9h7dxLWJa0gN393lDAifvfW/LetJbv4zPbBtJlNolzO1yDCzm0E5eR3OulYIcTexF3DwouqywYORlIzDbxRIIJGz9aC9rMadBeM7QETf/wDms2NS41faDvnwOa9bVLodSFHijWAQATrBPM1kMDcW3dS434XQknVoBEgAaKdOZo+PYvFmExF3OAZADJE+YSNfMiqYmrIlrp2Iv4F3d/tSA3EyMO9UaREwdRHTbUyDTODw2CV7LLiszWVYKO9ViwOZjIGp3Og6DpXN29ql8Jtq91VaSozMQNyERnIBHXLEjrU6rpXEnR7j3LbM2Z3fVYy5mJAmdaCXVdcraaRr6yNeRB9iOlaDAvfbDv4bouuVOHCHKgSCSEQMBEK+48Wm9UPEkB7u6FCl1JYDQZldkJAGwMAx1mqg1DBg4MMCCCNpGxj/AJFXq9p74GttG8/EPlWYVzyMelOLiG2Jn1q4mr5u0mJJkBB5ZWoVnyX/AIvmaFMXa61WR7Q8OVXYMAbV4EEHaSIZT67+5rXVA47hu8sOOYGYeq66e0j3rjK6vOPb/hnc3bf35NsBmc5i5ViMwadRlyelVXCuMPaNsZvArgxpoJ1gxPM11fj/AGdt4wWs7NFuSMpEkNEiSNvCK5nxbstetXjbVSykwGMbToa2j0Nw7EC5bVx+IA+53+c1Iis9wAtbsIp5DUdJMx86treNHOgsLbEVKW7VamJXrTy3h1qCbdKspVgGU7qwBB9QdKz3EOyeHchrU2WHIaoZ5ZeXLY+1W3ejrQ77zqmK3s5w23aXLkTvULBmiTBJKwTqBED2q9UD1ri2O/aOqcX7xWzYUKLFwrqGAYk3VjeGbTeQDG9dSHF0KhkYMrAFWBkMDsQRU0xdMwG9QcTxBVrJ8U7WosqrBnAPhB59JHPyrIcR4497d4BEqJgSNw0x9TWpxZvJseKdrFBy2yGbWDykctPrQ1keJcVa8Ydj4h4R/C45EA/n51WZiwGs59Qf4XGsb+XPoetTeD8Iu4u6LVoRmknfLbZI8R09BpPLrWskZttQzdLbltfuliTlcbrJOxg/PrUPEWpOYDfcdG5866H/APTjFHe7Z8Q8QltHH4ge78h8BTHE+xGJtWmuM1tlibgUtpH4wCokD9BTYmVhbViN6fBoXLZBIPKkxWkGaHeldojnoJ+NGqk6Aa1MtcPaAWHhOg8/egPhWJKXrbyNGU6zBE6gwCYIkbc66jwjB3Et4cWbIvWlDlLneBCVdg4zqwnNplMTtP8ALWZ7Odlbb2ixN0nMQO6UNsEPiLbTnkDop5itFhrtvBWmsNiLid4pZA6HvLcllJESNYJA96xyut8Yy/G1yv3Qg5C+YgHKbjmXCfyjwqP6NtaqSY51Ku3QHIUlhrlJEEjkSJ26n8qPEsMwKgdSCPPSR6VWUUiaNfSgDr/b6+ulOLhyZIEwJOoGnXXlQJtoZge0TU/Cs1so0rKtmEKCT1BI1Knb3osFERz005kazpz/AA6c4NaTh2LwgsoGNgPlGcXLDXGNyHk5gYYTk22APXRVi+wFgNbS7axGS0qmAyKxQAEFc5OmWWAkHzmsJxFke4chhF8KA8lE6k9SSWPmxrTvxfDW0uImHfumMnLbGR9vEJP3Sf0rJYlla4WRDbWZC7kDnp5/DWsxaYu2WXXl9b9KRcQ5c8GJieRPSpDXwqkHTQiN9yCB7a67axVNibxXU7eVaZSDiT0PwoVXfbh/CfjQqo7tQoUK87uwvG+Gth7hZR+6YyOik/hPTyqOrqw866C6ggggEHcHUH1FYvtBgxZujL9xgSB0IOo+Y+NblQLK+tPNhp1B+P8AimLN7TQVNV2I0EVRC7tvo1HscQzfdYMOoMj47VZXsDnENqv8PI/1dfTaouMUDKBv06UAuYi4ollYDqQQK5z+0PtLibk4awGFqIuMp1uE7oSNk5Ec9eVWXEuKOWdTcYiWAHlJABPpWRupBI86s46luIOC4ZbVRn8THc/w+g/WtPYxL27Ysq2VLceEEeJTM8zrufUVShassNcBUEg+HRozar5wPff8JreRjaeW0dVUjwnOscxzWYB5x/qFN4d8xKqNZzLsII33O3l5mphsmIA1TUeanlM9JG3IUzdTK4Zeeo+h9a0ZOi2WOmgc6TIyuP106bitX+zq/bt4zM5CZ7bW5Og7zMhAmTuFPrA61mhDdfEJH8rjz57fKlXcEXCsoAJ8LSYhhp7dPhSrHVW4GTbKHHXJN3OWzQRpGX7/AL9J/DSeNYdbVrG3XxBdbtspkJ8KFlIUAAnUzEgDQeU1zX7JPieDur9D5zHn84q14RgVCvdhngKuU/dclwAWUAZgJLZdddDvFZxrWdxNskHSSu/UryMfXOoldF4vhyqWAyM4WExIcLoWbKO7/gYQxAXTRQQZIrCY/ChLrIDIDFQdhoY3OlalZsJsCFLDcHntH19dLvgHDDiHBkGQYUyVXxLmJnQ+HMdiOZ2qu4WiyytE7DYiQdDIMHntvyq14FiUs3g94XYWCmQx4weY0kb6THlSkO8dwV6w5Fo5FYswVCQMhgpoIGYSySAJyT5mluYu7JDfejmdfzq+7RYxMTd7y2l1TMuWJIbaAFkhYA61TXrgBUN4mG5HI6f2J96kKZLO2iljtPhCwY1Eg7eenpRBGQzt7g+9HcxMkkb6689TJNMCtImnFacp9P8AP6Uk41vKohfzps36CZbRmMwT6foatGxXdLB57kgEnWfvH69aolxMFSoII1MmQSDyAAgbdamLi1bc+zeQjRvSoN1evr9h+0i2SplvxTnYFCCmX7oXSZjKJ5xWTXEFlDKxBJPhIOwjxTlgfGdNqW/aPE5MnfqEjL+EmNvvRPlVYmLCTDFtTp5xBkn4aefrUkW0LtzfOwDDSJLE8jsIHueVRruKkQNB86bu3cxJIEmT8fSmq0gUKUbvkvwoUHfqFVOP7S4Sz9++k/wqc7fBJIrOY/8AaVYWRatO56sQi/qfkK88ld25rHdsMWrkKuuQmT67/kKzT9v8VcdQMltSdQqyY6Zmn5RS7dwsrE85rU44iRgLhq+wt41mMA+taXBGqJbliKp+IXQis52VS3wBNXhPhrGduXY4a4iRmueAT0O/ymgwB4gCcx1n2ptr6u2lR7XZy4fvXlH+kn9RUy1wHu/F32YgHTLE/M1qVmzwQtsmrDh3gbXZhB+pH1NR7Jp0VtzWigqDqBk0AkAkHbUbn9RUK5eJEfhBJA5CSf703SmWgesYiFK+YIPMEba/CnEx7AkwPFE6dOY86i5anJw5gwDRGhlWVx/4kj2oJ+DJcTOXTWf0n8+XvVrwXFpZdQ5ZrZkESRAJBzKNwQVVgR/CNZqPbsgKMokSs85gajXSc2Y67zmo8K/dXRcKLcgzlbn7HUddfU8qy03XaK6lmybhud7nKm0sKFLCXVyVEkLJfpMeVYK3bQjX8z851+I9TWhxvatriFFtKJBXxNmA9AQB5/Os9btRPpB8hudD+unM61ItRcXwmPEDpMHYQfqPz6xFYkAfvJJmQC0rH8UgDXyPKpnE7qH8UbeQ0EAa/WvpNOb8EZZMHnzrUYWiNmUZgGMmCZ6DT/gTVbccAkdKm94dM0AnlP19TNVrLqZBmdaoM3+lIJJo4oUBAUoiklqT3lAuaKaaL0ktQPTTl28WMsxZuZJkn3NRJow1A/NJLUgtSCaBZehTdCgcuUxmqTcFQrlZdTqXCCD01rY2Lw7lOrCfY7fpWFL1rOGXM6qfID4cqlFhhUMiK0uCbKJJHuYFUF+y3c3O7+/llZ0BZWDgT55Y96oODdocZiMlw21Wyt+3ZuAKZUu629WLaauOXKsjf4vHKBvmPRdB7ms5xBGumWGg2A2Faj7MI2pk4EUGSPDvKk/+m+Va77EKL7ItNHLMZhzauMp2nT0Oo+vKlLWl7ecOACXl65G99VP+4e4rNWRpXSVzsynFFPWgPxTG+m/nTUiiF0etVEpxbjwzPnry+vhUmxi1iDpA/wAcvqB51Vsxosp5mguBj0BkPHx+f10FP/8AqwjcfL6/ufIVQi2KPSpgvrGPloZwimdQA58tOevp12FQsVjSZAJbzO3wNVxejLc6YFEayaFBdiZH6/CkZqodzEnqfj50q/c9dNDJ5/U1G70jY+9IzUDjPSC9JNFNAZaioTRVAqioA0DQChNJmhQKBojSTRigE0VCaFDExhUO+lChUjqiNT2A4k9kyNQd1P6dDQoUFhj+2T5MtpMp/ibWPQCkdj+PT/0zklr2Kw90kzvabPttqQN+lChWR1f7WIpvvjQoVFJe9G9RrmOA5k0KFBVcaui7ZdDzGnqNR8wKw1oyKKhW+LnyPBalW3txquv15z/x50KFaZKZEIkEjlrryJ/Sk3sMyxsZMD19/Q/CioUDZst0/LpP5U3etldzr0FChUDcUa9PqaFCgTNCaFCgKhQoUB/pRUKFAKBFFQoBRjpQoUCZoUKFFFQoUKBUjnNFQoUH/9k=',
        description: 'Implementation of robotics and automation solutions to automate repetitive and manual tasks in manufacturing processes, including robotic process automation (RPA), autonomous vehicles and industrial robots, to improve productivity and reduce costs.'
    }
]);
  // This is for rpa offering cards




  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsNavFixed(scrollPosition > 600);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  return (

    <>

    {/* This is rpalist starts */}

    <div className="banking-main-list" >
    <nav style={{ position: isNavFixed ? 'fixed' : 'relative', top: isNavFixed ? 70 : 0, zIndex: 1, width: '98vw', backgroundColor: "rgba(0, 0, 0, 0.4)", backdropFilter: "blur(20px)" }}>
<Link className='hover:cursor-pointer' to="overview" spy={true} smooth={true} offset={-150} duration={200}><li>Overview</li></Link>
<Link className='hover:cursor-pointer' to="whoweserve" spy={true} smooth={true} offset={-150} duration={200}><li>Who we serve</li></Link>
<Link className='hover:cursor-pointer' to="serviceofferings" spy={true} smooth={true} offset={-180} duration={200}><li>Service Offerings</li></Link>
<Link className='hover:cursor-pointer' to="querie" spy={true} smooth={true} offset={-200} duration={200}><li>Queries</li></Link>
</nav>

    </div>
    <hr />
   
   <div id='overview'>
    
   </div>

    <div className="container" style={{ color: 'white',marginTop:'50px' }} data-aos="fade-up"  >
    <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder', color: 'white' }}  > Overview</h1>




  
      <div className="row featurette" bis_skin_checked="1" style={{marginTop:'100px'}}  >

        <div className="col-md-7" bis_skin_checked="1">
        <h1 className="featurette-heading fw-normal lh-1" style={{ fontSize: '40px', padding: '20px', fontWeight: 'bolder' }}>Introducing the Next Generation of Manufacturing.</h1>
            <p className="lead" id='leadtext'>At QubicGen, we specialize in providing comprehensive solutions in the manufacturing sector. From optimizing production processes to implementing cutting-edge technologies, we are dedicated to helping manufacturers achieve operational excellence, drive innovation and stay ahead in a competitive market. With our tailored services, we empower companies to maximize efficiency, minimize costs and elevate their overall performance.</p>
        </div>
        <div className="col-md-5" bis_skin_checked="1">
        <img src="https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Manufacturing/manufacturing_overview.jpg" alt="" />
        </div>
      </div>
    </div>

    {/* This is rpalist ends */}

    <div id='whoweserve'>
    
    </div>
  
    

      <div className="container"  style={{marginTop:'130px'}}   >

      <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder', color: 'white' }}  > Who we Serve</h1>


        <div className="container text-center" style={{marginTop:'50px'}}  >
          <div className="row" style={{ display: 'flex', justifyContent: 'space-evenly' }} >
            {ManufacturingServe.map((item) => {
              return (
                <div className="card" style={{ height: '350px', width: '307px', marginTop: '20px' }} >
                  <a className="card1" >
                    <p style={{ fontSize: '22px', paddingBottom: "20px" }}>{item.title}</p>
                    <p style={{ fontSize: '13px' }}>{item.description}</p>
                    <div className="go-corner">
                      <div className="go-arrow">
                        →
                      </div>
                    </div>
                  </a>

                </div>
              )
            })}



          </div>
        </div>

      </div>







    {/* This is rpa offering start */}



    {/* This is who we server starts */}
     <div id='serviceofferings'>
    
    </div>

    <div style={{ color: 'white', marginLeft: '40px',marginTop:'120px'}} data-aos="zoom-in"  >
      
      <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }} > Service Offerings</h1>
  
   

      {/* This is offering */}

      <div className="container" style={{marginTop:'80px'}}  >
        <div className="row">
          {ManufacturingOffering.map((serve) => (
            <div className="book" style={{ marginLeft: '50px', marginTop: '20px' }}>
              <p className='text-sm'>{serve.description}</p>
              <div className="cover" style={{ background: `rgba(255, 255, 255, 0.8) url('${serve.background}') center/cover` }}>
                <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
                <p style={{ fontWeight: 'bolder', color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '15px' }}>{serve.title}</p>
              </div>


            </div>


          ))}
        </div>
        <br />
      </div>

      {/* This is offering ends */}





    </div>

    {/* This is who we server ends */}
    <div className="queries" id='querie' style={{marginTop:'50px'}}>
      <Queries />
    </div>






  </>
  )
}

export default Manufacturinglist