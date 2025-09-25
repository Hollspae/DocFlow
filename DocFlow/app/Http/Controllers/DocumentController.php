<?php

namespace App\Http\Controllers;
use App\Models\Document;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
    public function index()
    {
        return Document::all();
    }

    public function store(Request $request)
    {
        return Document::create($request->all());
    }

    public function show(Document $document)
    {
        return $document;
    }

    public function update(Request $request, Document $document)
    {
        $document->update($request->all());
        return $document;
    }

    public function destroy(Document $document)
    {
        $document->delete();
        return response()->noContent();
    }
}
