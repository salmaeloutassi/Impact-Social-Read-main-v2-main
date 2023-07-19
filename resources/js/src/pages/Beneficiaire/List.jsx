import React, { useState } from 'react';
import DefaultLayout from '../../components/Layouts/DefaultLayout';
import { DataTable } from 'mantine-datatable';



const List = ({ beneficiaries, regions, provinces, cities, ecoles }) => {


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

            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>

                    <th scope="col" class="px-6 py-3">
                      Region
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Province
                    </th>
                    <th scope="col" class="px-6 py-3">
                      City
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Ecole
                    </th>

                  </tr>
                </thead>
                <tbody>

                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4">

                    </td>

                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                    </th>

                    <td className='px-6 py-4'>

                    </td>

                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4">

                    </td>


                  </tr>




                </tbody>
              </table>
            </div>

          </div>
        </div>


      </div>
    </DefaultLayout>
  );
}

export default List;
