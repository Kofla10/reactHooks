

const useFech = async(num) => {

    const [data, setData] = useState([]);


    const getPost = async () => {
        const url = `https://fakestoreapi.com/products/${num}`;
        const resp = await fetch(url)
        const int = await resp.json();
        console.log(url)
        setData(int)

      }

      useEffect(() => {
          getPost();
      }, [num]);

    return  {
        ...data
    };

}

export default useFech
