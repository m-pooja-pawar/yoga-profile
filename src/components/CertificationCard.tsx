interface CertificationCardProps {
  title: string
  description: string
  hours?: string
}

export default function CertificationCard({
  title,
  description,
  hours,
}: CertificationCardProps) {
  return (
    <div className="card">
      <div className="flex items-start">
        <div className="flex-shrink-0 w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center mr-4">
          <svg
            className="w-5 h-5 text-sage-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        </div>
        <div className="flex-grow">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-serif text-lg text-gray-900">{title}</h3>
            {hours && (
              <span className="text-sm text-sage-600 bg-sage-50 px-2 py-1 rounded ml-4 flex-shrink-0">
                {hours}
              </span>
            )}
          </div>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}
