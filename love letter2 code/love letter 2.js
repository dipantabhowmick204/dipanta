$(document).ready(function () {
  const envelope = $("#envelope");

  $("#open").click(function () {
    openEnvelope();
  });

  $("#reset").click(function () {
    closeEnvelope();
  });

  envelope.click(function () {
    openEnvelope();
  });

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");
  }

  function closeEnvelope() {
    envelope.addClass("close").removeClass("open");
  }
});
