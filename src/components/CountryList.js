import { Link } from "react-router-dom"

const CountryList = ({ countries }) => {

    const getPhoto = (code) => {

        return `https://flagpedia.net/data/flags/icon/72x54/${code.toLowerCase()}.png`
    }

    let sort = (array) => {
        return array.sort((a,b) => a.name.common.localeCompare(b.name.common))
    }

    return (
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>


            <div className="list-group">


                {countries ? 
                    <>

                        {sort(countries).map((country) => {
                            return (
                                    <div className="list-group-item list-group-item-action" key={country.alpha3Code}>
                                        <Link to={`/${country.alpha3Code}`}>
                                                <img src={getPhoto(country.alpha2Code)} alt='flag' />
                                                <h2>{country.name.common}</h2>
                                        </Link>
                                    </div>
                            )
                        })}

                    </>

                    : <h4>Loading...</h4>
                }

                {/* <a class="list-group-item list-group-item-action" href="/ABW"
                    >๐ฆ๐ผ Aruba</a
                >
                <a class="list-group-item list-group-item-action" href="/AFG"
                    >๐ฆ๐ซ Afghanistan</a
                >
                <a class="list-group-item list-group-item-action" href="/AGO"
                    >๐ฆ๐ด Angola</a
                >
                <a class="list-group-item list-group-item-action" href="/AIA"
                    >๐ฆ๐ฎ Anguilla</a
                >
                <a class="list-group-item list-group-item-action" href="/ALA"
                    >๐ฆ๐ฝ รland Islands</a
                >
                <a class="list-group-item list-group-item-action" href="/ALB"
                    >๐ฆ๐ฑ Albania</a
                >
                <a class="list-group-item list-group-item-action" href="/AND"
                    >๐ฆ๐ฉ Andorra</a
                >
                <a class="list-group-item list-group-item-action" href="/ARE"
                    >๐ฆ๐ช United Arab Emirates</a
                >
                <a class="list-group-item list-group-item-action" href="/ARG"
                    >๐ฆ๐ท Argentina</a
                >
                <a class="list-group-item list-group-item-action" href="/ARM"
                    >๐ฆ๐ฒ Armenia</a
                >
                <a class="list-group-item list-group-item-action" href="/ASM"
                    >๐ฆ๐ธ American Samoa</a
                >
                <a class="list-group-item list-group-item-action" href="/ATA"
                    >๐ฆ๐ถ Antarctica</a
                >
                <a class="list-group-item list-group-item-action" href="/FLK"
                    >๐ซ๐ฐ Falkland Islands</a
                >
                <a
                    class="list-group-item list-group-item-action active"
                    href="/FRA"
                    >๐ซ๐ท France</a
                >
                <a class="list-group-item list-group-item-action" href="/ZWE"
                    >๐ฟ๐ผ Zimbabwe</a
                > */}
            </div>
        </div>
    )
}

export default CountryList