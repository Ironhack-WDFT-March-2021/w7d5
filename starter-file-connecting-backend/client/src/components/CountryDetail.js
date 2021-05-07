import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CountryDetail extends React.Component {

  state = {
    country: null
  }

  getCountryData = () => {
    const countryCode = this.props.match.params.id;
    axios.get(`/api/countries/${countryCode}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          country: response.data
        })
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getCountryData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getCountryData();
    }
  }

  render() {
    const country = this.state.country;
    console.log(this.state.country);
    if (!country) return <h1>Loading ...</h1>
    return (
      <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                  <sup>2</sup>
              </td>
            </tr>
            {country.borders.length > 0 && (
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map(el => {
                      return (
                        <li key={el.cca3}>
                          <Link to={`/${el.cca3}`}>
                            {el.name.common}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail;
