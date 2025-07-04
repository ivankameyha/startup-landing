import { useState, useEffect } from 'react';

const FloatingWhatsApp = ({ 
  phoneNumber = "5493813423617", 
  message = "Hola, vengo desde tu página web",
  position = "bottom-right",
  showTooltip = true,
  className = ""
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltipState, setShowTooltipState] = useState(false);

  // Mostrar el botón después de un pequeño delay para mejor UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Mostrar tooltip brevemente después de aparecer
      if (showTooltip) {
        setTimeout(() => {
          setShowTooltipState(true);
          // Ocultar tooltip después de 3 segundos
          setTimeout(() => setShowTooltipState(false), 3000);
        }, 1000);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [showTooltip]);

  const handleWhatsAppClick = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let url;
    if (isMobile) {
      // En móviles, intenta abrir la app directamente
      url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      
      // Fallback a WhatsApp Web si la app no está disponible
      const fallbackUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
      // Intentar abrir la app, si falla abrir web
      window.location.href = url;
      setTimeout(() => {
        window.open(fallbackUrl, '_blank');
      }, 1000);
    } else {
      // En desktop, usar WhatsApp Web o wa.me
      url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }

    // Ocultar tooltip si está visible
    setShowTooltipState(false);
  };

  // Determinar posición del botón
  const getPositionClasses = () => {
    switch (position) {
      case "bottom-left":
        return "bottom-4 left-4";
      case "bottom-right":
        return "bottom-4 right-4";
      case "top-right":
        return "top-4 right-4";
      case "top-left":
        return "top-4 left-4";
      default:
        return "bottom-4 right-4";
    }
  };

  // Determinar posición del tooltip
  const getTooltipClasses = () => {
    switch (position) {
      case "bottom-left":
        return "bottom-full mb-2 left-0";
      case "bottom-right":
        return "bottom-full mb-2 right-0";
      case "top-right":
        return "top-full mt-2 right-0";
      case "top-left":
        return "top-full mt-2 left-0";
      default:
        return "bottom-full mb-2 right-0";
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed ${getPositionClasses()} z-50 ${className}`}
      style={{ zIndex: 9999 }}
    >
      {/* Tooltip */}
      {showTooltipState && (
        <div 
          className={`absolute ${getTooltipClasses()} bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 animate-fade-in shadow-lg`}
          style={{
            animation: 'fadeIn 0.3s ease-in-out forwards'
          }}
        >
          ¡Escríbenos por WhatsApp!
          <div 
            className={`absolute w-2 h-2 bg-gray-800 transform rotate-45 ${
              position.includes('bottom') ? 'top-full -mt-1' : 'bottom-full -mb-1'
            } ${
              position.includes('right') ? 'right-3' : 'left-3'
            }`}
          />
        </div>
      )}
      
      {/* Botón principal */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setShowTooltipState(true)}
        onMouseLeave={() => setShowTooltipState(false)}
        className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Contactar por WhatsApp"
        title="Contactar por WhatsApp"
      >
        {/* Icono de WhatsApp */}
        <svg 
          className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"/>
        </svg>
        
        {/* Indicador de notificación (opcional) */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
      </button>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FloatingWhatsApp;