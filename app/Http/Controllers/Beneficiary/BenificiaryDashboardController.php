<?php

namespace App\Http\Controllers\Beneficiary;

use App\Models\City;
use Inertia\Inertia;
use App\Models\Region;
use App\Models\Province;
use App\Models\Beneficiary;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Ecole;

class BenificiaryDashboardController extends Controller
{
    public function index()
    {
        $regions = Region::all();
        $provices = Province::all();
        $cities = City::all();
        $ecoles = Ecole::with('region:id,name_region')->get();

        $beneficiaries = Beneficiary::all();

        return Inertia::render('Beneficiaire/List', [
            'regions' => $regions,
            'provinces' => $provices,
            'cities' => $cities,
            'ecoles' => $ecoles,
            'beneficiaries' => $beneficiaries
        ]);
    }
}
