<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public $products = [
        ['id' => 1, 'name' => 'Laptop', 'price' => 50000],
        ['id' => 2, 'name' => 'Mobile', 'price' => 20000],
        ['id' => 3, 'name' => 'TV', 'price' => 30000],
        ['id' => 4, 'name' => 'Fridge', 'price' => 40000],
        ['id' => 5, 'name' => 'Washing Machine', 'price' => 50000],
    ];

    public function get_products()
    {
        return Inertia::render('Products', [
            'products' => $this->products
        ]);
    }

}
