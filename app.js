$("#tsparticles")
  .particles()
  .init({
    background: {
      color: {
        value: "#000",
      },
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 5,
          opacity: 0.8,
          size: 10,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 1,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#3273ff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 2000,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "triangle",
      },
      size: {
        random: true,
        value: 1,
      },
    },
    detectRetina: true,
  });
