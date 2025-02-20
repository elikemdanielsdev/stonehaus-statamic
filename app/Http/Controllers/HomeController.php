<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Statamic\Entries\Entry;

class HomeController extends Controller
{
    public function show()
    {
        //  Retrieve home page data
        $page = Entry::query()
            ->where('collection', 'pages')
            ->where('slug', 'home')
            ->first();

        //  Pass data to the view
        return Inertia::render('Home', [
            'page' => [
                'title' => $page->get('title'),
                'content' => $page->get('content'),
                'meta_title' => $page->get('meta_title'),
                'meta_image' => $page->get('meta_image'),
            ],
        ]);
    }
}
