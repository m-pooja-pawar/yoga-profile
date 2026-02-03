interface PoseCardProps {
  name: string
  sanskritName: string
  description: string
  benefits: string[]
  precautions?: string
}

export default function PoseCard({
  name,
  sanskritName,
  description,
  benefits,
  precautions,
}: PoseCardProps) {
  return (
    <div className="card hover:shadow-md transition-shadow duration-200">
      <div className="mb-4">
        <h4 className="font-serif text-xl text-gray-900 mb-1">{name}</h4>
        <p className="text-sage-600 text-sm italic">{sanskritName}</p>
      </div>

      <p className="text-gray-600 text-sm mb-4">{description}</p>

      <div className="mb-4">
        <h5 className="text-sm font-medium text-gray-800 mb-2">Benefits:</h5>
        <ul className="space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start">
              <span className="text-sage-500 mr-2">•</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {precautions && (
        <div className="pt-4 border-t border-sage-100">
          <p className="text-xs text-sand-600">
            <span className="font-medium">Note:</span> {precautions}
          </p>
        </div>
      )}
    </div>
  )
}
