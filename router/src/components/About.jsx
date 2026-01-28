import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const pageChange = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', "2");
    setSearchParams(newParams);
    const page = searchParams.get('page');
    console.log(page)
  }

  return (
    <div>
      This is a about page
      <button onClick={pageChange}>
        ok
      </button>
    </div>
  )
}

export default About
