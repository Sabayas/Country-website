export const CountryCard = ({country}) => {
    return (
        <li className='card'>{country.name.common}</li>
    )
};