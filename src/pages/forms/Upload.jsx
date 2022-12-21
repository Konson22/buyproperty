import { propertiesType, statesData } from '../../assets/data'
import './css/forms.css'

export default function Upload() {
    return (
        <div className='form-wraper'>
            <div className='upload-form-wraper'>
                <form className='row'>
                    {formFields.map((field, index) => (
                        <div className={`input-container ${field.col}`} key={index}>
                            <label htmlFor={field.label}>{field.label}</label>
                            {(field.type === 'text' || field.type === 'number') && <input {...field} /> }
                            {field.type === 'textarea' && <textarea {...field}></textarea> }
                            {field.type === 'select' &&
                                <select {...field}>
                                    {field.options.map((opt, index) => (
                                        <option key={index} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            }
                        </div>
                    ))}
                    <div className="">
                        <button type='submit' className='btn btn-primary w-100'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


const formFields = [
    { name:'AdsType', label:'Ads Type', type:'select', options:['Sale', 'Rent'], col:'col-6' },
    { name:'property Type', label:'Property Type', type:'select', options:propertiesType, col:'col-6' },
    { name:'state', label:'State', placeholder:'State', type:'select', options:statesData, col:'col-md-6' },
    { name:'address', label:'Address', placeholder:'Where you property is located...', type:'text', col:'col-md-6' },
    { name:'price', label:'Price', placeholder:'Set price', type:'text', col:'col-6' },
    { name:'currency', label:'Currency', type:'select', options:['USD', 'SSP', 'UGX'], col:'col-6' },
    { name:'description', label:'Description', placeholder:'Description here...', type:'textarea', col:'col-md-12' },
]