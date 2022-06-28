import {CheckCircle, Lock} from 'phosphor-react';
import {isPast, format} from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import { Link, useParams } from 'react-router-dom';
import clasNames from 'classnames'

interface LessonProps{
  title: string;
  slug: string;
  availableAt: Date;
  type:'live' | 'class';
};

export function Lesson(props: LessonProps){
  const {slug} = useParams<{slug: string}>()

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'HH':'mm",{
    locale: ptBR,
  });

  const isActiveLesson = slug == props.slug;

  return(
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>
      
      <div className={clasNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors',{
        'bg-green-500': isActiveLesson
      })}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20}/>
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20}/>
              Em breve
            </span>
          )}
          <span className="text-xs rounded py-2 px-2 text-white border border-green-300 font-bold">
           {props.type == 'live' ? 'AO VIVO' : "AULA PRÁTICA"} 
          </span>
        </header>
        <strong className={clasNames('mt-5 block',{
          'text-white': isActiveLesson,
          'text-gray-200 ': !isActiveLesson
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}