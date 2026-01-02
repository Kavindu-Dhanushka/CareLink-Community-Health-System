import React, { useState } from 'react';
import { 
  PlusIcon, 
  XMarkIcon,
  PhotoIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ClockIcon,
  TrashIcon,
  PencilIcon
} from '@heroicons/react/24/outline';

const MOCK_ARTICLES = [
  {
    id: 1,
    title: 'Benefits of a Mediterranean Diet',
    excerpt: 'Exploring the heart-healthy benefits of Mediterranean eating...',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
    author: 'Dr. James Smith',
    status: 'Published',
    date: '2024-01-15'
  },
  {
    id: 2,
    title: '10 Tips for Better Sleep',
    excerpt: 'Improve your sleep quality with these evidence-based tips...',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400',
    author: 'Nurse Sarah',
    status: 'Published',
    date: '2024-01-10'
  },
  {
    id: 3,
    title: 'Hydration Myths Debunked',
    excerpt: 'Do you really need 8 glasses of water a day?...',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400',
    author: 'Dr. Mary Lee',
    status: 'Draft',
    date: '2024-01-03'
  }
];

const HealthContentManagement = () => {
  const [articles, setArticles] = useState(MOCK_ARTICLES);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);

  const handleAddNew = () => {
    setEditingArticle(null);
    setIsModalOpen(true);
  };

  const handleEdit = (article) => {
    setEditingArticle(article);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this article?')) {
      setArticles(articles.filter(a => a.id !== id));
    }
  };

  const handleSave = (articleData) => {
    if (editingArticle) {
      setArticles(articles.map(a => a.id === editingArticle.id ? { ...articleData, id: editingArticle.id } : a));
    } else {
      const newArticle = { ...articleData, id: Date.now() };
      setArticles([newArticle, ...articles]);
    }
    setIsModalOpen(false);
  };

  const publishedCount = articles.filter(a => a.status === 'Published').length;
  const draftCount = articles.filter(a => a.status === 'Draft').length;

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Health Articles</h1>
            <p className="text-slate-500 mt-1">Manage, review, and publish community health content</p>
          </div>
          <button 
            onClick={handleAddNew}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            <PlusIcon className="w-5 h-5" />
            Create New
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-1">Published</p>
                <p className="text-3xl font-bold text-slate-900">{publishedCount}</p>
              </div>
              <CheckCircleIcon className="w-12 h-12 text-emerald-500" />
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-1">Drafts</p>
                <p className="text-3xl font-bold text-slate-900">{draftCount}</p>
              </div>
              <ClockIcon className="w-12 h-12 text-amber-500" />
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article) => (
            <ArticleCard 
              key={article.id} 
              article={article}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>

        {/* Add/Edit Modal */}
        {isModalOpen && (
          <ArticleModal 
            article={editingArticle}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSave}
          />
        )}
      </div>
    </div>
  );
};

const ArticleCard = ({ article, onEdit, onDelete }) => {
  const statusColors = {
    'Published': 'bg-emerald-100 text-emerald-700',
    'Draft': 'bg-amber-100 text-amber-700'
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition group">
      <div className="relative h-48 bg-slate-100 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[article.status]}`}>
          {article.status}
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="font-bold text-slate-900 text-lg line-clamp-2">{article.title}</h3>
        <p className="text-sm text-slate-500 line-clamp-2">{article.excerpt}</p>
        
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <div className="text-xs text-slate-500">
            <p className="font-medium text-slate-700">{article.author}</p>
            <p>{article.date}</p>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => onEdit(article)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
            >
              <PencilIcon className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onDelete(article.id)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ArticleModal = ({ article, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: article?.title || '',
    excerpt: article?.excerpt || '',
    image: article?.image || '',
    author: article?.author || '',
    status: article?.status || 'Draft',
    date: article?.date || new Date().toISOString().split('T')[0]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.author) {
      alert('Please fill in title and author');
      return;
    }
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <DocumentTextIcon className="w-8 h-8 text-blue-600" />
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {article ? 'Edit Article' : 'Create New Article'}
              </h2>
              <p className="text-sm text-slate-500">Add health content for your community</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition"
          >
            <XMarkIcon className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Article Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter article title..."
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Short Description</label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              rows="3"
              placeholder="Brief summary of the article..."
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Image URL</label>
            <div className="relative">
              <PhotoIcon className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {formData.image && (
              <div className="mt-3">
                <img src={formData.image} alt="Preview" className="w-full h-48 object-cover rounded-lg border border-slate-200" />
              </div>
            )}
          </div>

          {/* Author and Status */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Author name"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Draft</option>
                <option>Published</option>
              </select>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex gap-3 p-6 border-t border-slate-200">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            {article ? 'Update Article' : 'Create Article'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthContentManagement;