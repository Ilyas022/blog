import React, { useCallback, useEffect, useMemo } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useTypedSelector } from '../store/hooks/useTypedSelector'
import { useState } from 'react'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { useActions } from '../store/hooks/useActions'
import { axiosInstance } from '../utils/axios'
import { IPost } from '../models/posts'

const AddPostPage: React.FC = (): JSX.Element => {
  const { isLoged } = useTypedSelector((state) => state.user)
  const { status } = useTypedSelector((state) => state.posts)
  const { pathname } = useLocation()

  const navigate = useNavigate()
  const { id } = useParams()
  const isEdit = !!id

  const [postTitle, setPostTitle] = useState<string>('')
  const [tags, setTags] = useState<string>('')
  const [postText, setPostText] = useState<string>('')
  const [image, setImage] = useState<File | undefined>()
  const [preview, setPreview] = useState<string>('')
  const { addPost, editPost } = useActions()

  useEffect(() => {
    if (!isLoged || status === 'added' || status === 'edited') {
      navigate('/')
    }
  }, [navigate, isLoged, status])

  useEffect(() => {
    if (id) {
      const getPost = async () => {
        try {
          const data = await axiosInstance.get<IPost>(`/posts/${id}`)
          const post = data.data
          if (data.data._id) {
            setPostTitle(post.title)
            setPostText(post.text)
            setTags(post.tags.join(', '))

            if (post.imageUrl) {
              fetch(post.imageUrl)
                .then((res) => res.blob())
                .then((res) => {
                  setImage(new File([res], 'img', { type: res.type }))
                })
            }
          }
        } catch (error) {}
      }
      getPost()
    }
  }, [id])

  const resetData = () => {
    setPostTitle('')
    setPostText('')
    setTags('')
    setPreview('')
    setImage(undefined)
  }

  useEffect(() => {
    return () => {
      resetData()
    }
  }, [pathname])

  const onChange = useCallback((value: string) => {
    setPostText(value)
  }, [])

  const onSubmit = async () => {
    const data = new FormData()
    data.append('text', postText)
    data.append('title', postTitle)
    if (tags) {
      data.append('tags', tags.replace(/[\s,]+$/g, ''))
    }
    if (image) {
      data.append('image', image)
    }
    if (isEdit) {
      editPost({ id: id, data: data })
    } else {
      addPost(data)
    }
  }

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введите текст поста',
      status: false,
    }),
    []
  )

  useEffect(() => {
    if (image) {
      const objectUrl = URL.createObjectURL(image)
      setPreview(objectUrl)
      return () => {
        URL.revokeObjectURL(objectUrl)
      }
    }
  }, [image])

  return (
    <main>
      <div className="max-w-5xl mx-auto bg-white">
        {preview ? <img className="h-80 w-full object-cover" src={preview} alt="" /> : null}
        <div className="p-10">
          <div className="flex gap-5 mb-6">
            <label className="p-3 border-main border border-solid rounded hover:bg-main hover:text-white transition-colors duration-200 text-main cursor-pointer">
              Загрузить картинку
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImage(e.target.files[0])}
              />
            </label>
            {preview ? (
              <button
                className="p-3 text-base border-red-700 hover:bg-red-500 hover:text-white transition-colors duration-200 border border-solid rounded"
                onClick={() => {
                  setPreview('')
                  setImage(undefined)
                }}
              >
                Удалить картинку
              </button>
            ) : null}
          </div>
          <input
            className="block w-full text-3xl font-semibold mb-3"
            value={postTitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPostTitle(e.target.value)}
            type="text"
            placeholder="Post title"
          />
          <input
            className="block w-full focus:border-main border-b border-solid border-transparent mb-4"
            value={tags}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTags(e.target.value)}
            type="text"
            placeholder="Tags"
          />
          <SimpleMDE className="mb-6" value={postText} onChange={onChange} options={options} />
          <div>
            <button
              onClick={onSubmit}
              disabled={postTitle && postText ? false : true}
              className="p-3 border-main border border-solid rounded bg-main text-white mr-5 disabled:bg-red-500 transition-colors duration-300"
            >
              {isEdit ? 'Сохранить' : 'Опубликовать'}
            </button>
            <button className="p-3  border border-solid rounded border-red-700 hover:bg-red-500 hover:text-white transition-colors duration-200">
              Отмена
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AddPostPage
