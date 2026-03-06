import React from 'react';
import Avatar from '../atoms/Avatar';
import Badge from '../atoms/Badge';

export default function PostCard({ author, role, time, content, tags }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl mb-4 shadow-sm animate-in fade-in slide-in-from-bottom-2">
      <div className="p-4 flex justify-between items-start">
        <div className="flex gap-3">
          <Avatar size="md" src={`https://api.dicebear.com/7.x/initials/svg?seed=${author}`} />
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-gray-900">{author}</h4>
              <Badge text="Following" color="gray" />
            </div>
            <p className="text-[11px] text-gray-500">{role}</p>
            <p className="text-[10px] text-gray-400">{time} • 🌐</p>
          </div>
        </div>
      </div>
      <div className="px-4 pb-2">
        <p className="text-sm text-gray-800 whitespace-pre-wrap">{content}</p>
        <div className="mt-3 flex gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-blue-600 text-xs font-bold hover:underline cursor-pointer">#{tag}</span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-around border-t border-gray-100 p-1">
        {['Like', 'Comment', 'Repost', 'Send'].map(action => (
          <button key={action} className="flex-1 py-3 text-gray-500 text-xs font-bold hover:bg-gray-100 rounded-lg transition-colors">
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}