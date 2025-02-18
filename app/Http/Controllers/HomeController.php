<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Statamic\Entries\Entry;

class HomeController extends Controller
{
    public function show()
    {
        //  Retrieve data.
        $page = Entry::query()
            ->where('collection', 'pages')
            ->where('slug', 'home')
            ->first();

        //  Pass data to view.
        return Inertia::render('Index', [
            'page' => [
                'title' => $page->get('title'),
                'content' => $page->get('content'),
            ],
        ]);
    }
}
