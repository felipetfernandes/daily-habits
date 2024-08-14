import { log } from 'console'
import { redirect } from 'next/navigation'
import React from 'react'

export default function newHabit() {
    const newHabit = async (formData: FormData) => {
        "use server"
        const habit = formData.get('habit')

        log(habit)
    }

    return (
    <main className='flex flex-col gap-5 mt-20'>
        <h1 className='text-4xl font-light text-center text-white font-display'>Novo Hábito</h1>
        <form className='flex flex-col gap-5'>
                <input type="text" name='habit' id='habit' className='p-2 font-sans text-xl text-white rounded-md bg-neutral-800' />
                <button type='submit' className="text-center text-neutral-900 font-display font-regular text-2xl p-2 rounded-md bg-[#45EDAD] ">Cadastrar</button>
                <button
                    type='button'
                    className='bg-neutral-800 text-[#F85858] font-regular text-2xl p-2 rounded-md'
                >Cancelar</button>
        </form>
    </main>
  )
}
