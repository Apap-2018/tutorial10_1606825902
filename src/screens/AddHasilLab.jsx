import React from 'react';
import { Loading } from '../components/Loading';
import { FormHasilLab } from '../containers/FormHasilLab';
import { Appointment } from '../utils/Appointment'

export class AddHasilLab extends React.Component{

    constructor(props) {
		super(props)
		this.state = {
			loading: true,
			pasien: {},
		}
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}

	componentDidMount(){
		Appointment.getDetailPasien(this.props.match.params.id).then(response => {
			if (response.status == 200){
				this.setState({
					loading:false,
					pasien:response.result
				})
			} else {
				alert('Data tidak ditemukan')
				this.props.history.push('/all-pasien')
			}
		})
	}
	handleFormSubmit(e) {
		e.preventDefault()
		/** 
		 * TODO: Akses method updateStatusPasien(requestBody) pada Appointment dan lakukan update state. 
		 */
		this.setState({
			loading:true
		})

		//Membuat Form Data baru berdasarkan input form yang sudah ada
		const data = new FormData(e.target)
		const dataJson = {}
		const pasien = {}
		dataJson['jenis'] = data.get('jenis')
		dataJson['hasil'] = data.get('hasil')
		dataJson['tanggalPengajuan'] = data.get('tanggalPengajuan')
		pasien['id']=data.get('id')
		dataJson['pasien'] = pasien

		Appointment.addHasilLab(dataJson).then(response => {
			if (response.status==200){
				this.setState({
					loading:false
				})
				console.log(response)
				alert(`Sukses mengirim hasil lab dari pasien ${this.state.pasien.nama}`)
				this.props.history.push('/all-pasien')
			} else {
				this.setState({
					loading:false
				})
				alert(`Gagal mengirim hasil lab dari pasien ${this.state.pasien.nama}`)
			}
		})
	}

	render() {
		if (this.state.loading) {
			return (
				<Loading msg="Fetching Data..." />
			)
		} else {
			return (
				<FormHasilLab pasien={this.state.pasien} onSubmit={this.handleFormSubmit} />
			)
		}
	}
}