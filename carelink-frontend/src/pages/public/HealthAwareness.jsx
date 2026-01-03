import React, { useState } from "react";
import { Check, X } from "lucide-react";
import Footer from "../../components/layout/Footer";

/* -------------------- DATA -------------------- */
const ARTICLES = [
    {
        id: 1,
        category: "Prevention",
        color: "bg-blue-500",
        image:
            "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop",
        verifiedBy: "Dr. Sarah Smith",
        title: "5 Ways to Boost Immunity Naturally",
        description:
            "Simple lifestyle habits and nutrition tips to strengthen your immune system.",
        content:
            "Full article content goes here for boosting immunity naturally. Eat fruits, sleep well, exercise, stay hydrated, etc.",
    },
    {
        id: 2,
        category: "Nutrition",
        color: "bg-orange-500",
        image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        verifiedBy: "Nutritionist Jane Doe",
        title: "Balanced Diets for Diabetes Control",
        description:
            "Learn how food choices can help regulate blood sugar effectively.",
        content:
            "Full article content about balanced diets for diabetes. Focus on low glycemic foods, portion control, etc.",
    },
    {
        id: 3,
        category: "Mental Health",
        color: "bg-purple-500",
        image:
            "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
        verifiedBy: "Dr. Emily Chen",
        title: "Mindfulness for Stress Relief",
        description:
            "Daily mindfulness habits that improve focus and reduce anxiety.",
        content:
            "Full article content on mindfulness: meditation, breathing exercises, journaling, etc.",
    },
    {
        id: 4,
        category: "Nutrition",
        color: "bg-orange-500",
        image:
            "https://images.unsplash.com/photo-1523983308336-1e0178b9e45f?w=400&h=300&fit=crop",
        verifiedBy: "Dietitian John Smith",
        title: "Superfoods to Include in Your Daily Diet",
        description:
            "Discover nutrient-rich foods that boost energy and immunity.",
        content:
            "Full content on superfoods: berries, nuts, leafy greens, whole grains, and healthy fats.",
    },
    {
        id: 5,
        category: "Mental Health",
        color: "bg-purple-500",
        image:
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=300&fit=crop",
        verifiedBy: "Psychologist Anna Lee",
        title: "Coping with Anxiety During Work Stress",
        description:
            "Practical tips to manage anxiety in professional life.",
        content:
            "Full content on anxiety management: deep breathing, meditation, task prioritization, and seeking support.",
    }
    // Add remaining articles...
];

const TOPICS = ["All", "Prevention", "Nutrition", "Mental Health", "Maternal Care", "Elderly Care"];

/* -------------------- CARD COMPONENT -------------------- */
const ArticleCard = ({ article, onRead }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition flex flex-col">
            <div className="relative">
                <img
                    src={article.image}
                    alt={article.title}
                    className="h-48 w-full object-cover rounded-t-xl"
                />
                <span
                    className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-white rounded ${article.color}`}
                >
                    {article.category}
                </span>
            </div>

            <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600">
                        Verified by {article.verifiedBy}
                    </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {article.description}
                </p>

                <button
                    onClick={() => onRead(article)}
                    className="mt-auto border-2 border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition"
                >
                    Read Article
                </button>
            </div>
        </div>
    );
};

/* -------------------- MAIN COMPONENT -------------------- */
export default function HealthAwareness() {
    const [activeTopic, setActiveTopic] = useState("All");
    const [selectedArticle, setSelectedArticle] = useState(null);

    // Filter articles by category
    const filteredArticles =
        activeTopic === "All"
            ? ARTICLES
            : ARTICLES.filter(
                (article) => article.category.toLowerCase() === activeTopic.toLowerCase()
            );

    return (
        <section className="max-w-7xl mx-auto px-4 py-12 relative">
            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                    Health Awareness & Education
                </h2>
            </div>

            {/* FILTER BUTTONS */}
            <div className="flex flex-wrap gap-3 mb-10">
                {TOPICS.map((topic) => (
                    <button
                        key={topic}
                        onClick={() => setActiveTopic(topic)}
                        className={`px-4 py-2 rounded-full font-medium transition ${activeTopic === topic
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        {topic}
                    </button>
                ))}
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} onRead={setSelectedArticle} />
                ))}
            </div>

            {/* MODAL */}
            {selectedArticle && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-lg max-w-xl w-full p-6 relative">
                        <button
                            onClick={() => setSelectedArticle(null)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                        >
                            <X size={24} />
                        </button>

                        <img
                            src={selectedArticle.image}
                            alt={selectedArticle.title}
                            className="h-56 w-full object-cover rounded-lg mb-4"
                        />

                        <span
                            className={`px-3 py-1 text-xs font-semibold text-white rounded ${selectedArticle.color}`}
                        >
                            {selectedArticle.category}
                        </span>

                        <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                            {selectedArticle.title}
                        </h3>

                        <p className="text-gray-700 mb-4">{selectedArticle.content}</p>

                        <span className="text-sm text-gray-500">
                            Verified by {selectedArticle.verifiedBy}
                        </span>
                    </div>
                </div>
            )}


        </section>



    );

}

