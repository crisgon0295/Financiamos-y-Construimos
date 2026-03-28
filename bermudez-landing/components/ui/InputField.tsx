'use client'

import { InputHTMLAttributes, forwardRef } from 'react'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  label?: string
  error?: string
  isSelect?: boolean
  options?: { value: string; label: string }[]
}

const InputField = forwardRef<HTMLInputElement | HTMLSelectElement, InputFieldProps>(
  ({ label, error, isSelect = false, options, className = '', ...props }, ref) => {
    const inputStyles = `
      w-full
      bg-surface-container px-4 py-3.5
      ghost-border
      text-on-surface body-md
      focus:border-primary focus:outline-none
      transition-all duration-200
      rounded-[7px]
      shadow-[0_2px_15px_rgba(255,255,255,0.04)]
      focus:shadow-[0_4px_25px_rgba(233,193,118,0.15)]
      hover:shadow-[0_3px_20px_rgba(255,255,255,0.08)]
      ${error ? 'border-[#D94F3D]' : ''}
    `

    const labelStyles = 'block label-md text-on-surface/50 mb-1.5'

    return (
      <div className={`mb-4 ${className}`.trim()}>
        {label && <label className={labelStyles}>{label}</label>}

        {isSelect && options ? (
          <select
            ref={ref as React.Ref<HTMLSelectElement>}
            className={`${inputStyles} appearance-none cursor-pointer`}
            {...(props as InputHTMLAttributes<HTMLSelectElement>)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value} className="bg-surface-container">
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            className={inputStyles}
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}

        {error && (
          <p className="text-[#D94F3D] text-xs mt-1.5">{error}</p>
        )}
      </div>
    )
  }
)

InputField.displayName = 'InputField'

export default InputField
