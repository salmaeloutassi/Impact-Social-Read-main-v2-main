import React, { useState, useEffect } from 'react';
import DefaultLayout from '../../components/Layouts/DefaultLayout';
import { DataTable } from 'mantine-datatable';
import { Link } from '@inertiajs/inertia-react';
import {  FiEye } from 'react-icons/fi';
import { encodeID } from '../../keys/Index';


const List = ({ beneficiaries, regions, provinces, cities, ecoles }) => {

  const PAGE_SIZES = [10, 20, 30, 50, 100];

  // Les états pour les options de recherche et de pagination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [initialRecords, setInitialRecords] = useState([]);
  const [recordsData, setRecordsData] = useState([]);

  // Utilisez useEffect pour mettre à jour initialRecords lorsque beneficiaries change
  useEffect(() => {
      if (beneficiaries && beneficiaries.length > 0) {
          const beneficiaryObj = JSON.parse(beneficiaries[0].dataBeneficiary);
          const beneficiary = beneficiaryObj.dataBenificiary;
          setInitialRecords(beneficiary);
      } else {
          setInitialRecords([]);
      }
  }, [beneficiaries]);

  // Utilisez useEffect pour paginer les données lorsque page ou pageSize change
  useEffect(() => {
      const from = (page - 1) * pageSize;
      const to = from + pageSize;
      setRecordsData([...initialRecords?.slice(from, to)]);
  }, [page, pageSize, initialRecords]);

    // Laissez recordsData vide pour afficher le tableau sans données.
  

  const [regionSearch, setRegionSearch] = useState('');
  const [provinceSearch, setProvinceSearch] = useState('');
  const [citySearch, setCitySearch] = useState('');
  const [schoolSearch, setSchoolSearch] = useState('');

  return (
    <DefaultLayout>
      <div className="space-y-6">

        <div className="panel">

          <div className="flex items-center justify-between mb-5">

            <h5 className="font-semibold text-lg dark:text-white-light">Les bénéficiaire Selectionner</h5>
            <input type="text" className="form-input w-auto" placeholder="Recherche rapide..." />
          </div>
          <div className="flex items-center justify-between mb-5">

            <select onChange={(e) => setRegionSearch(e.target.value)} className='form-select w-auto mx-1 ' name="region" id="" >
              <option value="">Selectionner  une region...</option >
              {regions.map((region) => (
                <option key={region.id} value={region.name_region}>{region.name_region}</option>
              ))}
            </select>

            <select onChange={(e) => setProvinceSearch(e.target.value)} className='form-select w-auto mx-1' name="province" id="" >
              <option value="">Selectionner  une province...</option>
              {provinces.map((province) => (
                <option key={province.id} value={province.name_province}>{province.name_province}</option>
              ))}
            </select>

            <select onChange={(e) => setCitySearch(e.target.value)} className='form-select w-auto mx-1' name="city" id="" >
              <option value="">Selectionner  une ville...</option>
              {cities.map((city) => (
                <option key={city.id} value={city.name_city}>{city.name_city}</option>
              ))}
            </select>

            <select onChange={(e) => setSchoolSearch(e.target.value)} className='form-select w-auto mx-1' name="school" id="" >
              <option value="">Selectionner  une ecole...</option>
              {ecoles.map((ecole) => (
                <option key={ecole.id} value={ecole.nom_fr}>{ecole.nom_fr}</option>
              ))}
            </select>

          </div>
          <div className="datatables">

           
          <DataTable
                striped
                className="whitespace-nowrap table-striped"
                records={recordsData}
                columns={[
                    { accessor: 'keys', title: 'Rang' },
                    { accessor: 'name', title: 'Nom' },
                    { accessor: 'region', title: 'Region' },
                    { accessor: 'province', title: 'Province' },
                    { accessor: 'city', title: 'Ville' },
                    { accessor: 'school', title: "Lycée" },
                    {
                        accessor: 'totalPoints',
                        title: 'Point',
                        render: ({ totalPoints }) => <span className='text-white inline-block p-2 rounded hover:text-gray-100 mr-2 bg-danger '>{totalPoints} </span>,
                    },
                    {
                        accessor: 'id',
                        title: 'Action',
                        render: ({ id }) => <Link href={route('dashboard.detail.scoring.candidate', encodeID(id))} className='text-white inline-block p-2 rounded hover:text-gray-100 mr-2 bg-blue-600 '><FiEye /></Link>,
                    },
                ]}
                totalRecords={initialRecords?.length}
                recordsPerPage={pageSize}
                page={page}
                onPageChange={(p) => setPage(p)}
                recordsPerPageOptions={PAGE_SIZES}
                onRecordsPerPageChange={setPageSize}
                minHeight={200}
                paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
            />
          </div>
        </div>


      </div>
    </DefaultLayout>
  );
}

export default List;
