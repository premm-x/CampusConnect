import { useState, useEffect } from 'react';
import { Pencil, Trash, Paperclip } from 'lucide-react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../config/axios';

function TeacherPage() {
  const [notices, setNotices] = useState([]);

  const [editingNotice, setEditingNotice] = useState(null);
  
  const [newNotice, setNewNotice] = useState({
    title: '',
    content: '',
    attachment: null,
  });

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axiosInstance.get("/notice");
        setNotices(response.data);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };
  
    fetchNotices();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewNotice({
          ...newNotice,
          attachment: {
            name: file.name,
            type: file.type,
            data: reader.result,
          },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // add notice
  const handleAddNotice = async (e) => {
    e.preventDefault();
    if (newNotice.title.trim() && newNotice.content.trim()) {
      try {
        const response = await axiosInstance.post("/notice", {
          title: newNotice.title,
          content: newNotice.content,
          attachment: newNotice.attachment || null, // Ensure it's sent as null if empty
        });
  
        setNotices([response.data, ...notices]);
        setNewNotice({ title: "", content: "", attachment: null });
      } catch (error) {
        console.error("Error adding notice:", error.response?.data || error);
      }
    }
  };

  const handleEditNotice = (notice) => {
    setEditingNotice(notice);
    setNewNotice({
      title: notice.title,
      content: notice.content,
      attachment: notice.attachment,
    });
  };

  const handleUpdateNotice = async (e) => {
    e.preventDefault();
    if (newNotice.title.trim() && newNotice.content.trim()) {
      try {
        const response = await axiosInstance.put(`/notice/${editingNotice._id}`, {
          title: newNotice.title,
          content: newNotice.content,
          attachment: newNotice.attachment,
        });
  
        setNotices(
          notices.map((notice) =>
            notice._id === editingNotice._id ? response.data : notice
          )
        );
        setEditingNotice(null);
        setNewNotice({ title: "", content: "", attachment: null });
      } catch (error) {
        console.error("Error updating notice:", error.response?.data || error);
      }
    }
  };
  

  const handleDeleteNotice = async (id) => {
    if (window.confirm("Are you sure you want to delete this notice?")) {
      try {
        await axiosInstance.delete(`/notice/${id}`);
        setNotices(notices.filter((notice) => notice._id !== id));
      } catch (error) {
        console.error("Error deleting notice:", error.response?.data || error);
      }
    }
  };
  

  const handleRemoveAttachment = () => {
    setNewNotice({ ...newNotice, attachment: null });
  };

  return (
    <div className='w-full'>
      
      <header className="w-full h-14  px-8 py-4 flex items-center justify-center">
            <nav className="w-full flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Campus</h1>
                <div className="flex items-center justify-center gap-7">
                    <a href="" className="hover:underline">Chat</a>
                    <Link to={'/'} className="hover:underline">Dashboard</Link>
                    <Link to={'/teacher'} href="" className="hover:underline">TeacherPage</Link>
                </div>
            </nav>
      </header>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl text-center bg-orange-300 font-semibold mb-6">Teacher Notice Board</h2>
        
        <form
          onSubmit={editingNotice ? handleUpdateNotice : handleAddNotice}
          className="bg-[#ffffff] rounded-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold mb-4">
            {editingNotice ? 'Edit Notice' : 'Add New Notice'}
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                value={newNotice.title}
                onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                className="w-full px-4 py-2 rounded-md  border border-gray-600 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Content</label>
              <textarea
                value={newNotice.content}
                onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
                className="w-full px-4 py-2 rounded-md  border border-gray-600 focus:border-blue-500 focus:outline-none h-32"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Attachment</label>
              <div className="flex items-center space-x-4">
                <label className="cursor-pointer px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-600 transition-colors">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*,.pdf,.doc,.docx"
                  />
                  <Paperclip className="w-5 h-5 inline-block mr-2" />
                  Choose File
                </label>
                {newNotice.attachment && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-300">
                      {newNotice.attachment.name}
                    </span>
                    <button
                      type="button"
                      onClick={handleRemoveAttachment}
                      className="text-red-400 hover:text-red-300"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              {editingNotice && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingNotice(null);
                    setNewNotice({ title: '', content: '', attachment: null });
                  }}
                  className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                {editingNotice ? 'Update Notice' : 'Add Notice'}
              </button>
            </div>
          </div>
        </form>

            {/* displaying notices */}
        <div className="space-y-4">
          {notices.length === 0 ? (
            <p className="text-gray-900 text-center py-8">No notices available</p>
          ) : (
            notices.map((notice) => (
              <div
                key={notice._id}
                className="bg-[#d6d8db]  rounded-lg p-6 shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{notice.title}</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditNotice(notice)}
                      className="p-2 hover:bg-gray-700 rounded-md transition-colors"
                    >
                      <Pencil className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteNotice(notice._id)}
                      className="p-2 hover:bg-gray-700 rounded-md transition-colors text-red-400"
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-900 mb-4">{notice.content}</p>
                {notice.attachment && (
                  <div className="mb-4">
                    {notice.attachment.type.startsWith('image/') ? (
                      <img
                        src={notice.attachment.data}
                        alt="Notice attachment"
                        className="max-w-full h-auto rounded-lg max-h-96 object-contain"
                      />
                    ) : (
                      <a
                        href={notice.attachment.data}
                        download={notice.attachment.name}
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                      >
                        <Paperclip className="w-5 h-5" />
                        <span>{notice.attachment.name}</span>
                      </a>
                    )}
                  </div>
                )}
                <div className="text-sm text-gray-500">
                  Posted on: {new Date(notice.date).toLocaleDateString()}
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default TeacherPage;