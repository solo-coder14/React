useEffect(() => {
  let isMounted = true;
  
  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      if (isMounted) {
        const data = await response.json();
        setData(data);
      }
    } catch (error) {
      if (isMounted) {
        setError(error.message);
      }
    }
  };

  fetchData();

  // Cleanup function
  return () => {
    isMounted = false;
  };
}, []);