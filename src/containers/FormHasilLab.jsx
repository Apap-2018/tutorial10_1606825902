import React from 'react';

const jenisPemeriksaan = {
    1: 'Diabetes',
    2: 'Mata',
    3: 'Saraf',
    4: 'THT',
    5: 'Gigi dan Mulut',
    6: 'Konsultasi Gizi',
    7: 'Fisioterapi',
    8: 'Penyakit Dalam'
}

export const FormHasilLab = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Update Status Pasien</h2>
            <input type="hidden" name="id" value={props.pasien.id} />
            <div className="form-group">
                <label>Nama Pasien<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="nama" defaultValue={props.pasien.nama} readOnly/>
            </div>
            <div className="form-group">
                <label>Tanggal Pengajuan</label>
                <input type="date" className="form-control" name="tanggalPengajuan"/>
            </div>
            <div className="form-group">
                <label>Jenis</label>
                <select className="form-control" name="jenis">
                    <option value="">Pilih Jenis Pemeriksaan</option>
                    {Object.keys(jenisPemeriksaan).map(key => {
                        return (
                            <option key={key} value={key}>{jenisPemeriksaan[key]}</option>
                        )
                    })}
                </select>
            </div>
            <div className="form-group">
                <label>Hasil</label>
                <input type="text" className="form-control" name="hasil"/>
            </div>
            <button className="btn btn-success" value="submit">Kirim Hasil</button>
        </form>
    )
}